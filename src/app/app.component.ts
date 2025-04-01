import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MobileNavbarComponent } from './shared/mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    NgStyle,
    MatSidenav,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NavbarComponent,
    MobileNavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Végtelen Világok';

  logoIMGPath: string = 'img/assets/icons/logo.png';

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }
}
