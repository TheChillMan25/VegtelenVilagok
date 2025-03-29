import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NationData } from '../nation_data';

interface Nation {
  diceNum: number;
  nationName: string;
}

interface CombinedNationRow {
  left?: Nation;
  right?: Nation;
}

@Component({
  selector: 'app-nemzet',
  imports: [MatTableModule],
  templateUrl: './nemzet.component.html',
  styleUrls: ['./nemzet.component.scss', '../segment_shared.scss'],
})
export class NemzetComponent {
  nationData: any = NationData;
  nationDataSource = new MatTableDataSource<CombinedNationRow>(this.nationData);
  displayedColumns: string[] = [
    'diceNum1',
    'nationName1',
    'diceNum2',
    'nationName2',
  ];

  combinedData: CombinedNationRow[] = [];

  constructor() {
    this.prepareCombinedData();
    this.nationDataSource = new MatTableDataSource<CombinedNationRow>(
      this.combinedData
    );
  }

  prepareCombinedData() {
    for (let i = 0; i < this.nationData.length / 2; i++) {
      this.combinedData.push({
        left: this.nationData[i] as Nation,
        right: this.nationData[i + 9] as Nation,
      });
    }
  }
}
