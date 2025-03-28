import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showAbout(){
    let help = document.getElementById('help')!;
    let about = document.getElementById('about');
    if(about){
      about.style.display = 'flex';
      help.style.display = 'none';
    }
  }

  closeAbout(){
    let help = document.getElementById('help')!;
    let about = document.getElementById('about');
    if(about){
      about.style.display = 'none';
      help.style.display = 'flex';
    }
  }
}
