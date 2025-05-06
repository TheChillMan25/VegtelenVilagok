import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'vegtelen-vilagok-fffff',
        appId: '1:793837253966:web:703a3a58abccea4ae7da1f',
        storageBucket: 'vegtelen-vilagok-fffff.firebasestorage.app',
        apiKey: 'AIzaSyBfV_ZVf1o1TZu7ct5WH17aa2plEKCZZrU',
        authDomain: 'vegtelen-vilagok-fffff.firebaseapp.com',
        messagingSenderId: '793837253966',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
