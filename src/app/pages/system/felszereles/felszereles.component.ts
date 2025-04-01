import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { FegyverekComponent } from './segments/fegyverek/fegyverek.component';
import { PancelokComponent } from './segments/pancelok/pancelok.component';
import { TargyakComponent } from './segments/targyak/targyak.component';

@Component({
  selector: 'app-felszereles',
  imports: [
    MatCardModule,
    TargyakComponent,
    FegyverekComponent,
    PancelokComponent,
  ],
  templateUrl: './felszereles.component.html',
  styleUrl: './felszereles.component.scss',
})
export class FelszerelesComponent {
  segment = '';

  chooseSegment(segment: string) {
    if (this.segment === segment) {
      this.segment = '';
    } else {
      this.segment = segment;
    }
  }
}
