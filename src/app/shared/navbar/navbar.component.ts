import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedOutEvent.emit(false);
    this.isLoggedIn = false;
    window.location.href = '/home';
  }
}
