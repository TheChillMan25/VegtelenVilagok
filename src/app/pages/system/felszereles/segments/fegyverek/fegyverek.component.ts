import { Component } from '@angular/core';
import { Propertes } from './weapon_props';
import { Weapons } from './weapons';

@Component({
  selector: 'app-fegyverek',
  imports: [],
  templateUrl: './fegyverek.component.html',
  styleUrl: './fegyverek.component.scss',
})
export class FegyverekComponent {
  props: any = Propertes;
  weapons: any = Weapons;

  selected: number | null = null;

  showDetails(index: number) {
    this.selected = this.selected === index ? null : index;
  }
}
