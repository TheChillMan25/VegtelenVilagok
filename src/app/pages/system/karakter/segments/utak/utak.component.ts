import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

interface UtakRow {
  eroUtja: string;
  ugyessegUtja: string;
  kitartasUtja: string;
  eszUtja: string;
  fortelyUtja: string;
  akarateroUtja: string;
}

@Component({
  selector: 'app-utak',
  imports: [MatTableModule],
  templateUrl: './utak.component.html',
  styleUrls: ['./utak.component.scss', '../segment_shared.scss'],
})
export class UtakComponent {
  displayedColumns: string[] = [
    'eroUtja',
    'ugyessegUtja',
    'kitartasUtja',
    'eszUtja',
    'fortelyUtja',
    'akarateroUtja',
  ];
  utakData: UtakRow[] = [
    {
      eroUtja: 'Katona',
      ugyessegUtja: 'Bérgyilkos',
      kitartasUtja: 'Vadász',
      eszUtja: 'Szakács',
      fortelyUtja: 'Zenész',
      akarateroUtja: 'Pap',
    },
    {
      eroUtja: 'Zsoldos',
      ugyessegUtja: 'Tolvaj',
      kitartasUtja: 'Őrző',
      eszUtja: 'Vegyész',
      fortelyUtja: 'Színész',
      akarateroUtja: 'Inkvizítor',
    },
    {
      eroUtja: 'Munkás',
      ugyessegUtja: 'Kézműves',
      kitartasUtja: 'Kereskedő',
      eszUtja: 'Orvos',
      fortelyUtja: 'Művész',
      akarateroUtja: 'Gyógyító',
    },
    {
      eroUtja: 'Kovács',
      ugyessegUtja: 'Rúnavéső',
      kitartasUtja: 'Gyűjtögető',
      eszUtja: 'Feltaláló',
      fortelyUtja: 'Bűvész',
      akarateroUtja: 'Vezeklő',
    },
  ];

  utakDataSource = new MatTableDataSource<UtakRow>(this.utakData);
}
