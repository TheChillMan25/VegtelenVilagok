import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private characters: Character[] = [];
  constructor() {}

  private charsSubject = new BehaviorSubject<Character[]>(this.characters);

  getCharacters() {
    return this.charsSubject.asObservable();
  }

  addCharacter(newCharacter: Character): Promise<Character> {
    return new Promise((resolve) => {
      this.characters.push(newCharacter);
      this.charsSubject.next([...this.characters]);
      resolve(newCharacter);
    });
  }
}
