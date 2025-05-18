import { Component } from '@angular/core';
import { CharTemplComponent } from './char-templ/char-templ.component';
import { Character } from '../../shared/models/character';
import { UserService } from '../../shared/services/management/user.service';
import { User } from '../../shared/models/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CharacterService } from '../../shared/services/management/character.service';

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
  freshStarterCharacters$: Character[] = [];

  isLoading: boolean = true;
  private profileSubscription: Subscription | null = null;
  private characterSubscription: Subscription | null = null;

  constructor(
    private userService: UserService,
    private charService: CharacterService
  ) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  ngOnDestroy() {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
    if (this.characterSubscription) {
      this.characterSubscription.unsubscribe();
    }
  }

  loadUserProfile() {
    this.isLoading = true;
    this.profileSubscription = this.userService.getUserProfile().subscribe({
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
    this.characterSubscription = this.charService
      .getFreshStarterCharacters()
      .subscribe({
        next: (data) => {
          this.freshStarterCharacters$ = data;
          console.log(this.freshStarterCharacters$);
        },
        error: (error) => {
          console.error('Hiba a friss karakterek betöltésekor:', error);
          this.isLoading = false;
        },
      });
  }
}
