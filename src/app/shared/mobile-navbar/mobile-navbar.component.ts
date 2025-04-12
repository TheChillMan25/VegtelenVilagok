import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-mobile-navbar',
  imports: [RouterLink, MatListModule, MatIconModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss',
})
export class MobileNavbarComponent {
  @Input() sidenav!: MatSidenav;
  @Input() isLoggedIn: boolean = false;
  @Output() logoutEvent = new EventEmitter<void>();

  closeMenu() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  toggleOptions(menu: string) {
    let options = document.getElementById(menu);
    if (options?.classList.contains('open')) {
      options.classList.remove('open');
    } else {
      options?.classList.add('open');
    }
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = '/home';
    this.closeMenu();
  }
}
