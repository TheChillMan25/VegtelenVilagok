import { Component, Input } from '@angular/core';
import { Character } from '../../../shared/models/character';

@Component({
  selector: 'app-char-templ',
  imports: [],
  templateUrl: './char-templ.component.html',
  styleUrl: './char-templ.component.scss',
})
export class CharTemplComponent {
  @Input() character!: Character;
}
