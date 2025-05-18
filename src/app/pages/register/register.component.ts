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
import { AuthService } from '../../shared/services/auth/auth.service';

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
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    psw: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rePsw: new FormControl('', [Validators.required]),
  });

  isLoading: boolean = false;
  showForm: boolean = true;
  registerError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

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

    this.isLoading = true;
    this.showForm = false;

    const username = this.registerForm.value.username || '';
    const email = this.registerForm.value.email || '';
    const pw = this.registerForm.value.psw || '';

    this.authService
      .register(email, pw, username)
      .then((userCredential) => {
        console.log('Sikeres regisztráció: ', userCredential.user);
        this.authService.updateLoginStatus(true);
        this.router.navigateByUrl('/home');
      })
      .catch((error) => {
        console.error('Hiba a regisztráció során:', error);
        this.isLoading = false;
        this.showForm = true;

        switch (error.code) {
          case 'auth/email-already-in-use':
            this.registerError = 'This email already in use.';
            break;
          case 'auth/invalid-email':
            this.registerError = 'Invalid email.';
            break;
          case 'auth/weak-password':
            this.registerError =
              'The password is too weak. Use at least 6 characters.';
            break;
          default:
            this.registerError =
              'An error has occurred during registration. Please try again later.';
        }
      });
  }
}
