import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { User } from '../../shared/models/user';
import { Character } from '../../shared/models/character';

@Component({
  selector: 'app-register',
  imports: [
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  isLoading: boolean = false;
  showForm: boolean = true;

  constructor(private router: Router) {}

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    psw: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rePsw: new FormControl('', [Validators.required]),
  });

  registerError: string = '';

  register() {
    if (!this.registerForm.valid) {
      this.registerError = 'Hibás kitöltés!';
      return;
    }

    const psw = this.registerForm.get('psw')?.value;
    const rePsw = this.registerForm.get('rePsw')?.value;
    if (psw !== rePsw) {
      this.registerError = 'A két jelszó nem egyezik meg!';
      return;
    }

    localStorage.setItem(
      'user',
      JSON.stringify({
        name: 'Test',
        email: 'test@gmail.com',
        characters: [
          {
            nev: 'Character 1',
            faj: 'Holtág',
            ut: 'Rúnavéső',
            utSzint: 1,
            mainStatok: [
              {
                nev: 'Életerő',
                ertek: 5,
                max: 5,
                desc: '',
              },
              {
                nev: 'Elme',
                ertek: 5,
                max: 5,
                desc: '',
              },
            ],
            statok: [
              { nev: 'Erő', ertek: '+3', desc: '' },
              { nev: 'Ügyesség', ertek: '+3', desc: '' },
              { nev: 'Kitartás', ertek: '+3', desc: '' },
              { nev: 'Ész', ertek: '+3', desc: '' },
              { nev: 'Fortély', ertek: '+3', desc: '' },
              {
                nev: 'Akaraterő',
                ertek: '+3',
                desc: '',
              },
            ],
          },
          {
            nev: 'Character 1',
            faj: 'Holtág',
            ut: 'Rúnavéső',
            utSzint: 1,
            mainStatok: [
              {
                nev: 'Életerő',
                ertek: 5,
                max: 5,
                desc: '',
              },
              {
                nev: 'Elme',
                ertek: 5,
                max: 5,
                desc: '',
              },
            ],
            statok: [
              { nev: 'Erő', ertek: '+3', desc: '' },
              { nev: 'Ügyesség', ertek: '+3', desc: '' },
              { nev: 'Kitartás', ertek: '+3', desc: '' },
              { nev: 'Ész', ertek: '+3', desc: '' },
              { nev: 'Fortély', ertek: '+3', desc: '' },
              {
                nev: 'Akaraterő',
                ertek: '+3',
                desc: '',
              },
            ],
          },
        ] as Character[],
      })
    );

    const newUser: User = {
      username: this.registerForm.value.username || '',
      email: this.registerForm.value.email || '',
      password: this.registerForm.value.psw || '',
      characters: [] as Character[],
    };

    console.log('New user:', newUser);
    this.router.navigateByUrl('/login');
  }
}
