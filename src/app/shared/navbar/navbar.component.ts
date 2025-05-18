import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  logoIMGPath: string = 'img/assets/icons/logo.png';
  isLoggedIn: boolean = false;
  @Output() isLoggedOutEvent = new EventEmitter<boolean>();

  private authSubscription?: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.currentUser.subscribe((user) => {
      this.isLoggedIn = !!user;
      localStorage.setItem('isLoggedIn', this.isLoggedIn ? 'true' : 'false');
    });
  }

  logout(): void {
    this.isLoggedOutEvent.emit(false);
    this.isLoggedIn = false;
    this.authService.signOut();
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
}
