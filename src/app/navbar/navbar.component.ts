import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  logoIMGPath: string = 'img/assets/icons/logo.png';
  logoWidth: string = '4rem';
  logoHeight: string = '4rem';

  @Output() logoClick = new EventEmitter<string>();

  onlogoClick() {
    this.logoClick.emit('home');
  }
}
