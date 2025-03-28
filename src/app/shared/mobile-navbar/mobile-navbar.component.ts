import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-mobile-navbar',
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss',
})
export class MobileNavbarComponent {
  @Input() sidenav!: MatSidenav;

  closeMenu() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  toggleMenu(menu: string) {
    let menuObj = document.getElementById(menu);
    if (menuObj?.classList.contains('open')) {
      menuObj.classList.remove('open');
    } else {
      menuObj?.classList.add('open');
    }
  }
}
