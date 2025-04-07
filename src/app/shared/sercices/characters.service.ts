import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private characters: Character[] = [
    {
      nev: 'Character 1',
      faj: 'Holtág',
      ut: 'Rúnavéső',
      utSzint: 1,
      mainStatok: [
        {
          nev: 'Életerő',
          ertek: 5,
          max: 5,
          desc: '',
        },
        {
          nev: 'Elme',
          ertek: 5,
          max: 5,
          desc: '',
        },
      ],
      statok: [
        { nev: 'Erő', ertek: '+3', desc: '' },
        { nev: 'Ügyesség', ertek: '+3', desc: '' },
        { nev: 'Kitartás', ertek: '+3', desc: '' },
        { nev: 'Ész', ertek: '+3', desc: '' },
        { nev: 'Fortély', ertek: '+3', desc: '' },
        {
          nev: 'Akaraterő',
          ertek: '+3',
          desc: '',
        },
      ],
      felszereles: ['Kard', 'Pajzs'],
      targyak: ['Gyógyital', 'Manaital'],
    },
    {
      nev: 'Character 1',
      faj: 'Holtág',
      ut: 'Rúnavéső',
      utSzint: 1,
      mainStatok: [
        {
          nev: 'Életerő',
          ertek: 5,
          max: 5,
          desc: '',
        },
        {
          nev: 'Elme',
          ertek: 5,
          max: 5,
          desc: '',
        },
      ],
      statok: [
        { nev: 'Erő', ertek: '+3', desc: '' },
        { nev: 'Ügyesség', ertek: '+3', desc: '' },
        { nev: 'Kitartás', ertek: '+3', desc: '' },
        { nev: 'Ész', ertek: '+3', desc: '' },
        { nev: 'Fortély', ertek: '+3', desc: '' },
        {
          nev: 'Akaraterő',
          ertek: '+3',
          desc: '',
        },
      ],
      felszereles: ['Kard', 'Pajzs'],
      targyak: ['Gyógyital', 'Manaital'],
    },
  ];
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
