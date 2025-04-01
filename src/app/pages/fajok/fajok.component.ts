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
  fajCards: any = CardData;
}
