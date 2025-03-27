import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '/folyokoz',
        loadComponent: () =>
          import('./fajok/folyokoz/folyokoz.component').then(
            (m) => m.FolyokozComponent
          ),
      },
      {
        path: '/toronyvarosok',
        loadComponent: () =>
          import('./fajok/toronyvarosok/toronyvarosok.component').then(
            (m) => m.ToronyvarosokComponent
          ),
      },
      {
        path: '/kelet-nepe',
        loadComponent: () =>
          import('./fajok/kelet-nepe/kelet-nepe.component').then(
            (m) => m.KeletNepeComponent
          ),
      },
      {
        path: '/novenyszerzetek',
        loadComponent: () =>
          import(
            './fajok/novenyszerzetek/novenyszerzetek.component'
          ).then((m) => m.NovenyszerzetekComponent),
      },
      {
        path: '/gepszulottek',
        loadComponent: () =>
          import('./fajok/gepszulottek/gepszulottek.component').then(
            (m) => m.GepszulottekComponent
          ),
      },
      {
        path: '/atkozottak',
        loadComponent: () =>
          import('./fajok/atkozottak/atkozottak.component').then(
            (m) => m.AtkozottakComponent
          ),
      },
]