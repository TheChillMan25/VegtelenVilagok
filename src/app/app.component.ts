import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FajokComponent } from './pages/fajok/fajok.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FajokComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild(FajokComponent) fajokComponent!: FajokComponent;
  title = 'Végtelen Világok';

  page = 'home';
  prevPage = 'home';

  changePage(page: string) {
    this.prevPage = this.page;
    if (page === 'fajok' && this.fajokComponent) {
      this.fajokComponent.changeFaj('');
    }
    this.page = page;
  }

  onBack() {
    if (this.page === 'fajok' && this.fajokComponent.currentFaj !== '') {
      this.fajokComponent.changeFaj('');
    } else{
      this.page = this.prevPage;
    }
  }
}
