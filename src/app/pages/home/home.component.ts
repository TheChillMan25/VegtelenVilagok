import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextShadowDirective } from '../../shared/directives/text-shadow.directive';

@Component({
  selector: 'app-home',
  imports: [TextShadowDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showAbout() {
    let help = document.getElementById('help')!;
    let about = document.getElementById('about');
    if (about) {
      about.style.display = 'flex';
      help.style.display = 'none';
    }
  }

  closeAbout() {
    let help = document.getElementById('help')!;
    let about = document.getElementById('about');
    if (about) {
      about.style.display = 'none';
      help.style.display = 'flex';
    }
  }
}
