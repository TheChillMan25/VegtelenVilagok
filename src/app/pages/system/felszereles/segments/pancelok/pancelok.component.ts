import { Component } from '@angular/core';
import { Armours } from './armours';


@Component({
  selector: 'app-pancelok',
  imports: [],
  templateUrl: './pancelok.component.html',
  styleUrl: './pancelok.component.scss'
})
export class PancelokComponent {
  pancelok: any = Armours;
}
