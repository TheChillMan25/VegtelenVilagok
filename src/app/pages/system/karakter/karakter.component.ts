import { Component } from '@angular/core';
import { NationData } from './nation_data';

@Component({
  selector: 'app-karakter',
  imports: [],
  templateUrl: './karakter.component.html',
  styleUrl: './karakter.component.scss'
})
export class KarakterComponent {
  nationData: any = NationData;

}
