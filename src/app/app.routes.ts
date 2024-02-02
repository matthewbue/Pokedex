import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'deck-details/:deckId',
    loadComponent: () => import('./components/deck-details/deck-details.component'),
  },
  {
    path: 'deck-list',
    loadComponent: () => import('./components/deck-list/deck-list.component'),
  },
  {
    path: 'create-deck',
    loadComponent: () => import('./components/create-deck/create-deck.component'),
  },
  {
    path: '',
    loadComponent: () => import('./components/menu/menu.component'),
  },

];
