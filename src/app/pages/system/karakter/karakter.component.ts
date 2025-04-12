import { Component } from '@angular/core';
import { NationData } from './segments/nation_data';
import { MatIcon } from '@angular/material/icon';
import { NemzetComponent } from './segments/nemzet/nemzet.component';
import { TulajdonsagokComponent } from './segments/tulajdonsagok/tulajdonsagok.component';
import { UtakComponent } from './segments/utak/utak.component';
import { KarakterFelszerelesComponent } from './segments/karakter-felszereles/karakter-felszereles.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-karakter',
  imports: [
    MatIcon,
    NemzetComponent,
    TulajdonsagokComponent,
    UtakComponent,
    KarakterFelszerelesComponent,
    RouterLink,
  ],
  templateUrl: './karakter.component.html',
  styleUrl: './karakter.component.scss',
})
export class KarakterComponent {
  nationData: any = NationData;
  segment: number = 0;
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  next() {
    if (this.segment < 5) {
      this.segment++;
    }
  }
  prev() {
    if (this.segment > 0) {
      this.segment--;
    }
  }
}
