import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../shared/models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-char-templ',
  templateUrl: './char-templ.component.html',
  styleUrl: './char-templ.component.scss',
})
export class CharTemplComponent {
  @Input() character!: Character;
  @Output() getCharIDEvent = new EventEmitter<string>();

  constructor(private router: Router) {}

  getCharacterID() {
    this.router.navigate(['/inspect', this.character.id]);
  }
}
