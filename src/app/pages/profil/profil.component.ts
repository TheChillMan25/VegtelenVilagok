import { Component } from '@angular/core';
import { CharTemplComponent } from './char-templ/char-templ.component';
import { CharactersService } from '../../shared/sercices/characters.service';
import { Character } from '../../shared/models/character';

@Component({
  selector: 'app-profil',
  imports: [CharTemplComponent],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
})
export class ProfilComponent {
  characters: Character[] = [];
  constructor(private charService: CharactersService) {
    this.loadCharacters();
  }

  loadCharacters() {
    this.charService.getCharacters().subscribe((characters) => {
      this.characters = characters;
      console.log('Characters loaded: ', this.characters);
    });
  }

  addCharacter() {
    const newChar: Character = {
      nev: 'Új Karakter',
      faj: 'Új Faj',
      ut: 'Új Út',
      utSzint: 1,
      mainStatok: [
        { nev: 'Életerő', ertek: 5, max: 5, desc: '' },
        { nev: 'Elme', ertek: 5, max: 5, desc: '' },
      ],
      statok: [
        { nev: 'Erő', ertek: '+3', desc: '' },
        { nev: 'Ügyesség', ertek: '+3', desc: '' },
        { nev: 'Kitartás', ertek: '+3', desc: '' },
        { nev: 'Ész', ertek: '+3', desc: '' },
        { nev: 'Fortély', ertek: '+3', desc: '' },
        { nev: 'Akaraterő', ertek: '+3', desc: '' },
      ],
      felszereles: ['Kard', 'Pajzs'],
      targyak: ['Gyógyital', 'Manaital'],
    };
    this.charService.addCharacter(newChar).then((addedChar) => {
      console.log('Character added: ', addedChar);
      this.loadCharacters();
    });
  }
}
