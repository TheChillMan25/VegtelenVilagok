import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

interface Fegyver {
  nev: string;
  kocka: string;
  ar: number;
}

interface Pancel {
  nev: string;
  ertek: number;
  mod: number;
  ar: number;
}



@Component({
  selector: 'app-karakter-felszereles',
  imports: [RouterLink, MatTableModule],
  templateUrl: './karakter-felszereles.component.html',
  styleUrls: [
    './karakter-felszereles.component.scss',
    '../segment_shared.scss',
  ],
})
export class KarakterFelszerelesComponent {
  displayedWeaponColumns: string[] = ['fegyver', 'sebzes', 'ar'];
  displayedArmorColumns: string[] = ['pancel', 'ertek', 'mod', 'ar'];

  weapons: Fegyver[] = [
    { nev: 'Tőr, Pálca, Ostor', kocka: '1d4', ar: 5 },
    {
      nev: 'Kard, Hosszúkard, Rapír, Szablya, Fejsze, Buzogány, Lándzsa, Kalapács, Fokos',
      kocka: '1d6',
      ar: 10,
    },
    { nev: 'Csatabárd, Pöröly', kocka: '1d8', ar: 20 },
    { nev: 'Íj, Számszeríj', kocka: '1d10', ar: 25 },
    { nev: 'Pisztoly, Karabély', kocka: '1d12', ar: 30 },
    { nev: 'Kézi ágyú', kocka: '3d6', ar: 40 },
    { nev: 'Kézi balliszta', kocka: '1d20', ar: 50 },
  ];

  armours: Pancel[] = [
    {nev: 'Ruha', ertek: 1, mod: 0, ar: 15},
    {nev: 'Ruha', ertek: 2, mod: 0, ar: 25},
    {nev: 'Ruha', ertek: 3, mod: -1, ar: 35},
    {nev: 'Sétáló erőd', ertek: 5, mod: -2, ar: 50}
  ]

  weaponDataSource = new MatTableDataSource<Fegyver>(this.weapons);
  armourDataSource = new MatTableDataSource<Pancel>(this.armours);
}
