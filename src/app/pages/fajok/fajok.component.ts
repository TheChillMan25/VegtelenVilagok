import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { CardData } from './fajok/fajok_card_data';

@Component({
  selector: 'app-fajok',
  imports: [RouterModule, RouterLink],
  templateUrl: './fajok.component.html',
  styleUrl: './fajok.component.scss'
})
export class FajokComponent {

  currentFaj: string = '';
  fajCards: any = CardData;

  @Output() back = new EventEmitter<void>();

  changeFaj(faj: string): void {
    this.currentFaj = faj;
    //console.log(faj);
  }

  onBack(): void {
    this.back.emit();
  }
}
