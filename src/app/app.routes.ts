import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FajokComponent } from './pages/fajok/fajok.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Ágas és Bogas | Enciklopédia',
    component: HomeComponent,
  },
  {
    path: 'fajok',
    title: 'Ágas és Bogas | Fajok',
    component: FajokComponent,
  },
  {
    path: 'fajok/folyokoz',
    title: 'Fajok | Folyóköziek',
    loadComponent: () =>
      import('./pages/fajok/fajok/folyokoz/folyokoz.component').then(
        (m) => m.FolyokozComponent
      ),
  },
  {
    path: 'fajok/toronyvarosok',
    title: 'Fajok | Toronyvárosiak',
    loadComponent: () =>
      import('./pages/fajok/fajok/toronyvarosok/toronyvarosok.component').then(
        (m) => m.ToronyvarosokComponent
      ),
  },
  {
    path: 'fajok/kelet_nepe',
    title: 'Fajok | Kelet Népe',
    loadComponent: () =>
      import('./pages/fajok/fajok/kelet-nepe/kelet-nepe.component').then(
        (m) => m.KeletNepeComponent
      ),
  },
  {
    path: 'fajok/novenyszerzetek',
    title: 'Fajok | Növényszerzetek',
    loadComponent: () =>
      import(
        './pages/fajok/fajok/novenyszerzetek/novenyszerzetek.component'
      ).then((m) => m.NovenyszerzetekComponent),
  },
  {
    path: 'fajok/gepszulottek',
    title: 'Fajok | Gépszülöttek',
    loadComponent: () =>
      import('./pages/fajok/fajok/gepszulottek/gepszulottek.component').then(
        (m) => m.GepszulottekComponent
      ),
  },
  {
    path: 'fajok/atkozottak',
    title: 'Fajok | Átkozottak',
    loadComponent: () =>
      import('./pages/fajok/fajok/atkozottak/atkozottak.component').then(
        (m) => m.AtkozottakComponent
      ),
  },
  {
    path: 'karakter',
    title: 'Ágas és Bogas | Karakter',
    loadComponent: () =>
      import('./pages/system/karakter/karakter.component').then(
        (m) => m.KarakterComponent
      ),
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
