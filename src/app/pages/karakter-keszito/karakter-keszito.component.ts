import { Component } from '@angular/core';
import { NationData } from '../system/karakter/segments/nation_data';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PathsData } from '../system/karakter/segments/paths_data';
import {
  ArmourData,
  WeaponsData,
} from '../system/karakter/segments/weapons_data';
import { Targyak } from '../system/felszereles/segments/targyak/targyak';
import { Character } from '../../shared/models/character';
import { CharactersService } from '../../shared/sercices/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-karakter-keszito',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOption,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './karakter-keszito.component.html',
  styleUrl: './karakter-keszito.component.scss',
})
export class KarakterKeszitoComponent {
  fajok: any = NationData;
  utak: any = PathsData;
  fegyverek: any = WeaponsData;
  pancelok: any = ArmourData;
  targyak: any = Targyak;

  constructor(
    private characterService: CharactersService,
    private router: Router
  ) {}

  characterForm: FormGroup = new FormGroup({
    nev: new FormControl('', [Validators.required, Validators.minLength(3)]),
    faj: new FormControl('', [Validators.required]),
    ut: new FormControl('', [Validators.required]),
    statok: new FormGroup({
      fizikai: new FormGroup({
        ero: new FormControl(0, [
          Validators.required,
          Validators.min(-3),
          Validators.max(+3),
        ]),
        ugyesseg: new FormControl(0, [
          Validators.required,
          Validators.min(-3),
          Validators.max(+3),
        ]),
        kitartas: new FormControl(0, [
          Validators.required,
          Validators.min(-3),
          Validators.max(+3),
        ]),
      }),
      mentalis: new FormGroup({
        esz: new FormControl(0, [
          Validators.required,
          Validators.min(-3),
          Validators.max(+3),
        ]),
        fortely: new FormControl(0, [
          Validators.required,
          Validators.min(-3),
          Validators.max(+3),
        ]),
        akaratero: new FormControl(0, [
          Validators.required,
          Validators.min(-3),
          Validators.max(+3),
        ]),
      }),
    }),
    felszereles: new FormGroup({
      balKez: new FormControl(''),
      jobbKez: new FormControl(''),
      pancel: new FormControl(''),
    }),
    targyak: new FormGroup({
      targy1: new FormControl(''),
      targy2: new FormControl(''),
      targy3: new FormControl(''),
    }),
  });

  createCharacter() {
    if (!this.characterForm.valid) {
      console.log('Form is invalid!');
      return;
    }

    console.log(
      this.characterForm.value.ero,
      this.characterForm.value.ugyesseg,
      this.characterForm.value.kitartas,
      this.characterForm.value.esz,
      this.characterForm.value.fortely,
      this.characterForm.value.akaratero
    );

    const newCharacter: Character = {
      nev: this.characterForm.value.nev,
      faj: this.characterForm.value.faj,
      ut: this.characterForm.value.ut,
      utSzint: 1,
      mainStatok: [
        {
          nev: 'Életerő',
          ertek: 7 + this.characterForm.get('statok.fizikai.kitartas')?.value,
          max: 7 + this.characterForm.get('statok.fizikai.kitartas')?.value,
          desc: '',
        },
        {
          nev: 'Stressz',
          ertek: 7 + this.characterForm.get('statok.mentalis.akaratero')?.value,
          max: 7 + this.characterForm.get('statok.mentalis.akaratero')?.value,
          desc: '',
        },
      ],
      statok: [
        {
          nev: 'Erő',
          ertek: this.characterForm.get('statok.fizikai.ero')?.value,
          desc: '',
        },
        {
          nev: 'Ügyesség',
          ertek: this.characterForm.get('statok.fizikai.ugyesseg')?.value,
          desc: '',
        },
        {
          nev: 'Kitartás',
          ertek: this.characterForm.get('statok.fizikai.kitartas')?.value,
          desc: '',
        },
        {
          nev: 'Ész',
          ertek: this.characterForm.get('statok.mentalis.esz')?.value,
          desc: '',
        },
        {
          nev: 'Fortély',
          ertek: this.characterForm.get('statok.mentalis.fortely')?.value,
          desc: '',
        },
        {
          nev: 'Akaraterő',
          ertek: this.characterForm.get('statok.mentalis.akaratero')?.value,
          desc: '',
        },
      ],
      felszereles: [
        this.characterForm.get('felszereles.balKez')?.value,
        this.characterForm.get('felszereles.jobbKez')?.value,
        this.characterForm.get('felszereles.pancel')?.value,
      ],
      targyak: [
        this.characterForm.get('targyak.targy1')?.value,
        this.characterForm.get('targyak.targy2')?.value,
        this.characterForm.get('targyak.targy3')?.value,
      ],
      keszitett: new Date(),
    };
    this.characterService.addCharacter(newCharacter).then((added) => {
      console.log(added);
      this.router.navigateByUrl('/profil');
    });
  }
}
