import { Component } from '@angular/core';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { NationData } from '../system/karakter/segments/nation_data';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
import { Router } from '@angular/router';
import { Character } from '../../shared/models/character';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { CharacterService } from '../../shared/services/management/character.service';

@Component({
  selector: 'app-karakter-keszito',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOption,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
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

  characterForm!: FormGroup;
  isLoading: boolean = false;
  private subscription: Subscription[] = [];

  constructor(
    private charService: CharacterService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  initForm() {
    this.characterForm = new FormGroup({
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
  }

  createCharacter() {
    if (this.characterForm.valid) {
      this.isLoading = true;
      const formValues = this.characterForm.value;
      const newCharacter: Omit<Character, 'id'> = {
        nev: formValues.nev,
        faj: formValues.faj,
        ut: formValues.ut,
        utSzint: 1,
        mainStatok: [
          {
            nev: 'HP',
            ertek: formValues.statok.fizikai.ero + 7,
            max: formValues.statok.fizikai.kitartas + 7,
            desc: 'Találati pontok',
          },
          {
            nev: 'Stressz',
            ertek: formValues.statok.mentalis.akaratero + 7,
            max: formValues.statok.mentalis.akaratero + 7,
            desc: 'Mentális fáradtsági pontok, elkölthetőek plusz akciókra',
          },
        ],
        statok: [
          {
            nev: 'Erő',
            ertek: formValues.statok.fizikai.ero,
            desc: 'Fizikai erőkifejtés: cipelés, harc, fizikai munka',
          },
          {
            nev: 'Ügyesség',
            ertek: formValues.statok.fizikai.ugyesseg,
            desc: 'Mozgékonyság és kézügyesség: zárfeltörés, kikerülés, akrobatika',
          },
          {
            nev: 'Kitartás',
            ertek: formValues.statok.fizikai.kitartas,
            desc: 'A test teherbírása az összeomlásig: ellenállás, túlélés, egészség',
          },
          {
            nev: 'Ész',
            ertek: formValues.statok.mentalis.esz,
            desc: 'A lexikális tudás és annak használata: tanulás, felismerés, tárgykészítés',
          },
          {
            nev: 'Fortély',
            ertek: formValues.statok.mentalis.fortely,
            desc: 'A meggyőző erő és kisugárzás: átverés, emberismeret, buzdítás',
          },
          {
            nev: 'Akaraterő',
            ertek: formValues.statok.mentalis.akaratero,
            desc: 'A jellem megtörhetetlensége: átkok, átverés és más mentális ellenállások',
          },
        ],
        felszereles: [
          formValues.felszereles.balKez,
          formValues.felszereles.jobbKez,
          formValues.felszereles.pancel,
        ],
        targyak: [
          formValues.targyak.targy1,
          formValues.targyak.targy2,
          formValues.targyak.targy3,
        ],
        keszitett: new Date().toISOString(),
      };

      this.charService
        .addCharacter(newCharacter)
        .then(() => {
          this.characterForm.reset();
          this.showNotification('Karakter sikeresen létrehozva!', 'success');
        })
        .catch((error) => {
          console.error('Hiba a karakter létrehozása során:', error);
          this.showNotification('Karakter létrehozása sikertelen!', 'error');
        })
        .finally(() => {
          this.isLoading = false;
          console.log('Karakter létrehozva:', newCharacter);
          this.router.navigateByUrl('/profil');
        });
    } else {
      Object.keys(this.characterForm.controls).forEach((key) => {
        const control = this.characterForm.get(key);
        control?.markAsTouched();
      });
      this.showNotification('Töltsd ki a kötelező mezőket!', 'warning');
    }
  }

  private showNotification(
    message: string,
    type: 'success' | 'error' | 'warning'
  ): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [`snackbar-${type}`],
    });
  }
}
