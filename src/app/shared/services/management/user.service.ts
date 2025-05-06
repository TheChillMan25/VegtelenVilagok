import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../../models/user';
import { Character } from '../../models/character';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  getUserProfile(): Observable<{
    user: User | null;
    characters: Character[];
    username: string;
    email: string;
  }> {
    return this.authService.currentUser.pipe(
      switchMap((authUser) => {
        if (!authUser) {
          return of({
            user: null,
            username: '',
            email: '',
            characters: [],
          });
        }
        return from(this.fetchUserWithCharacters(authUser.uid));
      })
    );
  }

  private async fetchUserWithCharacters(userID: string): Promise<{
    user: User | null;
    characters: Character[];
    username: string;
    email: string;
  }> {
    try {
      const userDocRef = doc(this.firestore, 'Users', userID);
      const userSnapshot = await getDoc(userDocRef);

      if (!userSnapshot.exists()) {
        return {
          user: null,
          characters: [],
          username: '',
          email: '',
        };
      }

      const userData = userSnapshot.data() as User;
      const user = { ...userData, id: userID };

      if (!user.characters || user.characters?.length === 0) {
        return {
          user,
          characters: [],
          username: user.username ?? '',
          email: user.email ?? '',
        };
      }

      const charactersCollection = collection(this.firestore, 'Characters');
      const q = query(charactersCollection, where('id', 'in', user.characters));
      const charactersSnapshot = await getDocs(q);

      const characters: Character[] = [];
      charactersSnapshot.forEach((doc) => {
        const characterData = doc.data();
        const character: Character = {
          id: doc.id,
          nev: characterData?.['nev'] ?? '',
          faj: characterData?.['faj'] ?? '',
          mainStatok: characterData?.['mainStatok'] ?? {},
          statok: characterData?.['statok'] ?? {},
          felszereles: characterData?.['felszereles'] ?? {},
          targyak: characterData?.['targyak'] ?? {},
          keszitett: characterData?.['keszitett'] ?? '',
          ut: characterData?.['ut'] ?? '',
          utSzint: characterData?.['utSzint'] ?? 0,
        };
        characters.push(character);
      });

      return {
        user,
        characters,
        username: user.username ?? '',
        email: user.email ?? '',
      };
    } catch (error) {
      console.error('Hiba a felhasználói adatok betöltése során:', error);
      return {
        user: null,
        characters: [],
        username: '',
        email: '',
      };
    }
  }
}
