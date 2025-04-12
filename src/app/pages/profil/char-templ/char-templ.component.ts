import { Component, Input } from '@angular/core';
import { Character } from '../../../shared/models/character';
import { DatePipe } from '../../../shared/pipes/date.pipe';

@Component({
  selector: 'app-char-templ',
  imports: [DatePipe],
  templateUrl: './char-templ.component.html',
  styleUrl: './char-templ.component.scss',
})
export class CharTemplComponent {
  @Input() character!: Character;
}
