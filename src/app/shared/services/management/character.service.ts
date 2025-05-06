import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  orderBy,
  getDoc,
  where,
} from '@angular/fire/firestore';
import {
  Observable,
  from,
  switchMap,
  map,
  of,
  take,
  firstValueFrom,
} from 'rxjs';
import { Character } from '../../models/character';
import { AuthService } from '../auth/auth.service';
import { User } from '../../models/user';
@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly CHARACTER_COLLECTION = 'Characters';
  private readonly USER_COLLECTION = 'Users';

  constructor(private firestore: Firestore, private authService: AuthService) {}

  private formatDateToString(date: Date | string): string {
    if (typeof date === 'string') {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) {
        return new Date().toISOString().split('T')[0];
      }
      return date.includes('T') ? date.split('T')[0] : date;
    }
    if (date instanceof Date) {
      return date.toISOString().split('T')[0];
    }
    return new Date().toISOString().split('T')[0];
  }

  async addCharacter(character: Omit<Character, 'id'>): Promise<Character> {
    try {
      const user = await firstValueFrom(
        this.authService.currentUser.pipe(take(1))
      );
      if (!user) {
        throw new Error('Felhasználó nem található!');
      }

      const charCollection = collection(
        this.firestore,
        this.CHARACTER_COLLECTION
      );
      const charToSave = {
        ...character,
        keszitett: this.formatDateToString(character.keszitett),
      };

      const docRef = await addDoc(charCollection, charToSave);
      const charID = docRef.id;

      await updateDoc(docRef, { id: charID });
      const newCharacter = {
        ...charToSave,
        id: charID,
      } as Character;

      const userDocRef = doc(this.firestore, this.USER_COLLECTION, user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data() as User;
        const characters = userData.characters || [];
        characters.push(charID);
        await updateDoc(userDocRef, { characters });
      }
      return newCharacter;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  }

  getAllCharacters(): Observable<Character[]> {
    return this.authService.currentUser.pipe(
      switchMap(async (user) => {
        if (!user) {
          return [];
        }
        try {
          const userDocRef = doc(
            this.firestore,
            this.USER_COLLECTION,
            user.uid
          );
          const userDoc = await getDoc(userDocRef);
          if (!userDoc.exists()) {
            return [];
          }
          const userData = userDoc.data() as User;
          const charIDs = userData.characters || [];
          if (charIDs.length === 0) {
            return [];
          }

          const charCollection = collection(
            this.firestore,
            this.CHARACTER_COLLECTION
          );
          const characters: Character[] = [];

          for (let index = 0; index < charIDs.length; index++) {
            const q = query(
              charCollection,
              where('id', 'in', userData.characters)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              characters.push({ ...doc.data(), id: doc.id } as Character);
            });
          }

          return characters;
        } catch (error) {
          console.error('Hiba a karakterek lekérdezésekor:', error);
          return [];
        }
      }),
      map((characters) => characters as Character[])
    );
  }
}
