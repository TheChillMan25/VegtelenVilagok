import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Character } from '../../shared/models/character';
import { CharacterService } from '../../shared/services/management/character.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inspect',
  imports: [ReactiveFormsModule, MatIconModule],
  templateUrl: './inspect.component.html',
  styleUrl: './inspect.component.scss',
})
export class InspectComponent {
  character?: Character;
  hpFormGroup = new FormGroup({
    hpInput: new FormControl('', [Validators.required, Validators.min(1)]),
  });
  strFormGroup = new FormGroup({
    strInput: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private charService: CharacterService,
    private router: Router
  ) {
    this.loadCharacter();
  }

  loadCharacter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.charService.getCharacterByID(id).then((character) => {
      if (character) {
        this.character = character;
      }
    });
  }

  heal(property: string | undefined) {
    switch (property) {
      case 'HP':
        let hpHeal = parseInt(this.hpFormGroup.value.hpInput ?? '0');
        let charHP = this.character?.mainStatok[0].ertek ?? 0;
        let maxHP = this.character?.mainStatok[0].max ?? 0;
        if (hpHeal > 0) {
          if (
            this.character?.mainStatok &&
            this.character.mainStatok[0] !== null &&
            this.character.mainStatok[0] !== undefined &&
            typeof this.character.mainStatok[0].ertek === 'number' &&
            this.character.mainStatok[0].ertek + hpHeal >= maxHP
          ) {
            this.character.mainStatok[0].ertek = maxHP;
          } else {
            if (
              this.character &&
              typeof this.character.mainStatok[0].ertek === 'number'
            ) {
              this.character.mainStatok[0].ertek = charHP + hpHeal;
            }
          }
        }
        break;
      case 'Stressz':
        let strHeal = parseInt(this.strFormGroup.value.strInput ?? '0');
        let charStressz = this.character?.mainStatok[1].ertek ?? 0;
        let maxStressz = this.character?.mainStatok[1].max ?? 0;
        if (strHeal > 0) {
          if (
            this.character?.mainStatok &&
            this.character.mainStatok[1] !== null &&
            this.character.mainStatok[1] !== undefined &&
            typeof this.character.mainStatok[1].ertek === 'number' &&
            this.character.mainStatok[1].ertek + strHeal >= maxStressz
          ) {
            this.character.mainStatok[1].ertek = maxStressz;
          } else {
            if (
              this.character &&
              typeof this.character.mainStatok[1].ertek === 'number'
            ) {
              this.character.mainStatok[1].ertek = charStressz + strHeal;
            }
          }
        }
        break;
    }
    if (this.character?.id) {
      this.charService.updateCharacter(this.character.id, {
        mainStatok: this.character.mainStatok,
      });
    }
    this.hpFormGroup.setValue({ hpInput: '' });
    this.strFormGroup.setValue({ strInput: '' });
  }

  damage(property: string | undefined) {
    switch (property) {
      case 'HP':
        let hpDamage = parseInt(this.hpFormGroup.value.hpInput ?? '0');
        let charHP = this.character?.mainStatok[0].ertek ?? 0;
        if (hpDamage > 0) {
          if (
            this.character?.mainStatok &&
            this.character.mainStatok[0] !== null &&
            this.character.mainStatok[0] !== undefined &&
            typeof this.character.mainStatok[0].ertek === 'number' &&
            this.character.mainStatok[0].ertek - hpDamage <= 0
          ) {
            this.character.mainStatok[0].ertek = 0;
          } else {
            if (
              this.character &&
              typeof this.character.mainStatok[0].ertek === 'number'
            ) {
              this.character.mainStatok[0].ertek = charHP - hpDamage;
            }
          }
        }
        break;
      case 'Stressz':
        let strDamage = parseInt(this.strFormGroup.value.strInput ?? '0');
        let charStressz = this.character?.mainStatok[1].ertek ?? 0;
        if (strDamage > 0) {
          if (
            this.character?.mainStatok &&
            this.character.mainStatok[1] !== null &&
            this.character.mainStatok[1] !== undefined &&
            typeof this.character.mainStatok[1].ertek === 'number' &&
            this.character.mainStatok[1].ertek - strDamage <= 0
          ) {
            this.character.mainStatok[1].ertek = 0;
          } else {
            if (
              this.character &&
              typeof this.character.mainStatok[1].ertek === 'number'
            ) {
              this.character.mainStatok[1].ertek = charStressz - strDamage;
            }
          }
        }
        break;
    }
    if (this.character?.id) {
      this.charService.updateCharacter(this.character.id, {
        mainStatok: this.character.mainStatok,
      });
    }
    this.hpFormGroup.setValue({ hpInput: '' });
    this.strFormGroup.setValue({ strInput: '' });
  }

  deleteCharacter() {
    if (this.character?.id) {
      this.charService.deleteCharacter(this.character.id);
      this.router.navigateByUrl('/profil');
    }
  }
}
