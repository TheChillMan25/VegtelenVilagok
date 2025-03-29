import { Component } from '@angular/core';
import { NationData } from './nation_data';
import { MatIcon } from '@angular/material/icon';
import { NemzetComponent } from './segments/nemzet/nemzet.component';

@Component({
  selector: 'app-karakter',
  imports: [MatIcon, NemzetComponent],
  templateUrl: './karakter.component.html',
  styleUrl: './karakter.component.scss'
})
export class KarakterComponent {
  nationData: any = NationData;
  segment: number = 1;

  next(){
    if(this.segment < 8){
      this.segment++;
    }
  }
  prev(){
    if(this.segment > 0){
      this.segment--;
    }
  }
}
