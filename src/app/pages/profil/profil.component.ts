import { Component } from '@angular/core';
import { CharTemplComponent } from './char-templ/char-templ.component';
import { Character } from '../../shared/models/character';
import { UserService } from '../../shared/services/management/user.service';
import { User } from '../../shared/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profil',
  imports: [CharTemplComponent],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
})
export class ProfilComponent {
  user: User | null = null;
  characters: Character[] = [];
  username: string = '';
  email: string = '';

  isLoading: boolean = true;
  private subscription: Subscription | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadUserProfile() {
    this.isLoading = true;
    this.subscription = this.userService.getUserProfile().subscribe({
      next: (data) => {
        (this.user = data.user),
          (this.characters = data.characters),
          (this.username = data.username),
          (this.email = data.email);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Hiba a felhasználói profil betöltésekor:', error);
        this.isLoading = false;
      },
    });
  }
}
