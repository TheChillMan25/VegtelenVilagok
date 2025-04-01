import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Targyak } from './targyak';

@Component({
  selector: 'app-targyak',
  imports: [MatTableModule],
  templateUrl: './targyak.component.html',
  styleUrl: './targyak.component.scss',
})
export class TargyakComponent {
  items: any = Targyak;
  selected: number | null = null;

  showDetails(index: number) {
    this.selected = this.selected === index ? null : index;
  }
}
