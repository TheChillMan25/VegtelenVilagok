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
}
