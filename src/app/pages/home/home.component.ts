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
    let about = document.getElementById('about');
    if(about){
      about.style.display = 'flex';
    }
  }

  closeAbout(){
    let about = document.getElementById('about');
    if(about){
      about.style.display = 'none';
    }
  }
}
