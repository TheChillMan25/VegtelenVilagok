import { Component, Output, EventEmitter } from '@angular/core';
import { FolyokozComponent } from '../fajok/fajok/folyokoz/folyokoz.component';
import { AtkozottakComponent } from "./fajok/atkozottak/atkozottak.component";
import { GepszulottekComponent } from './fajok/gepszulottek/gepszulottek.component';
import { KeletNepeComponent } from "./fajok/kelet-nepe/kelet-nepe.component";
import { NovenyszerzetekComponent } from './fajok/novenyszerzetek/novenyszerzetek.component';
import { ToronyvarosokComponent } from './fajok/toronyvarosok/toronyvarosok.component';
import { CardData } from './fajok/fajok_card_data';

@Component({
  selector: 'app-fajok',
  imports: [FolyokozComponent, AtkozottakComponent, GepszulottekComponent, KeletNepeComponent, NovenyszerzetekComponent, ToronyvarosokComponent],
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
