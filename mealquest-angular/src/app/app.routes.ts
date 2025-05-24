import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/recipe-list/recipe-list.component').then((m) => m.RecipeListComponent),
  },
  {
    path: 'recipe/:id',
    loadComponent: () =>
      import('./pages/recipe-detail/recipe-detail.component').then((m) => m.RecipeDetailComponent),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites/favorites.component').then((m) => m.FavoritesComponent),
  },
];
