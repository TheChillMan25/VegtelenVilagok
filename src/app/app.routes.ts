import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard, publicGuard } from './shared/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Ágas és Bogas | Enciklopédia',
    component: HomeComponent,
  },
  {
    path: 'fajok',
    title: 'Ágas és Bogas | Fajok',
    loadComponent: () =>
      import('./pages/fajok/fajok.component').then((m) => m.FajokComponent),
    canActivate: [publicGuard],
  },
  {
    path: 'login',
    title: 'Bejelentkezés',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
    canActivate: [publicGuard],
  },
  {
    path: 'register',
    title: 'Regisztráció',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
    canActivate: [publicGuard],
  },
  {
    path: 'karakter',
    title: 'Ágas és Bogas | Karakter',
    loadComponent: () =>
      import('./pages/system/karakter/karakter.component').then(
        (m) => m.KarakterComponent
      ),
    canActivate: [publicGuard],
  },
  {
    path: 'felszereles',
    title: 'Ágas és Bogas | Felszerelés',
    loadComponent: () =>
      import('./pages/system/felszereles/felszereles.component').then(
        (m) => m.FelszerelesComponent
      ),
    canActivate: [publicGuard],
  },
  {
    path: 'profil',
    title: 'Profil',
    loadComponent: () =>
      import('./pages/profil/profil.component').then((m) => m.ProfilComponent),
    canActivate: [authGuard],
  },
  {
    path: 'karakter-keszito',
    title: 'Karakter készítő',
    loadComponent: () =>
      import('./pages/karakter-keszito/karakter-keszito.component').then(
        (m) => m.KarakterKeszitoComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'inspect/:id',
    title: 'Karakter',
    loadComponent: () =>
      import('./pages/inspect/inspect.component').then(
        (m) => m.InspectComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'fajok/folyokoz',
    title: 'Fajok | Folyóköziek',
    loadComponent: () =>
      import('./pages/fajok/fajok/folyokoz/folyokoz.component').then(
        (m) => m.FolyokozComponent
      ),
    canActivate: [publicGuard],
  },
  {
    path: 'fajok/toronyvarosok',
    title: 'Fajok | Toronyvárosiak',
    loadComponent: () =>
      import('./pages/fajok/fajok/toronyvarosok/toronyvarosok.component').then(
        (m) => m.ToronyvarosokComponent
      ),
    canActivate: [publicGuard],
  },
  {
    path: 'fajok/kelet_nepe',
    title: 'Fajok | Kelet Népe',
    loadComponent: () =>
      import('./pages/fajok/fajok/kelet-nepe/kelet-nepe.component').then(
        (m) => m.KeletNepeComponent
      ),
    canActivate: [publicGuard],
  },
  {
    path: 'fajok/novenyszerzetek',
    title: 'Fajok | Növényszerzetek',
    loadComponent: () =>
      import(
        './pages/fajok/fajok/novenyszerzetek/novenyszerzetek.component'
      ).then((m) => m.NovenyszerzetekComponent),
    canActivate: [publicGuard],
  },
  {
    path: 'fajok/gepszulottek',
    title: 'Fajok | Gépszülöttek',
    loadComponent: () =>
      import('./pages/fajok/fajok/gepszulottek/gepszulottek.component').then(
        (m) => m.GepszulottekComponent
      ),
    canActivate: [publicGuard],
  },
  {
    path: 'fajok/atkozottak',
    title: 'Fajok | Átkozottak',
    loadComponent: () =>
      import('./pages/fajok/fajok/atkozottak/atkozottak.component').then(
        (m) => m.AtkozottakComponent
      ),
    canActivate: [publicGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    title: 'Page not found ...',
    component: NotFoundComponent,
  },
];
