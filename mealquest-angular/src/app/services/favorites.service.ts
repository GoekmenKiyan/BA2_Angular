import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favs = signal<any[]>(this.loadFromStorage());

  private loadFromStorage(): any[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  private saveToStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.favs()));
  }

  get favorites() {
    return this.favs();
  }

  isFavorite(id: number): boolean {
    return this.favs().some(r => r.id === id);
  }

  toggleFavorite(recipe: any) {
    const current = this.favs();
    const exists = current.find(r => r.id === recipe.id);
    if (exists) {
      this.favs.set(current.filter(r => r.id !== recipe.id));
    } else {
      this.favs.set([...current, recipe]);
    }
    this.saveToStorage();
  }
}
