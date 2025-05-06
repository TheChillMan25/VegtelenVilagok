import { Component, Input } from '@angular/core';
import { Character } from '../../../shared/models/character';

@Component({
  selector: 'app-char-templ',
  templateUrl: './char-templ.component.html',
  styleUrl: './char-templ.component.scss',
})
export class CharTemplComponent {
  @Input() character!: Character;

  ngOnInit() {
    //console.log(this.character);
  }
}
