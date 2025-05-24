import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favs = signal<number[]>(this.loadFromStorage());

  private loadFromStorage(): number[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  private saveToStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.favs()));
  }

  get favorites() {
    return this.favs;
  }

  isFavorite(id: number): boolean {
    return this.favs().includes(id);
  }

  toggleFavorite(id: number) {
    const current = this.favs();
    if (current.includes(id)) {
      this.favs.set(current.filter(i => i !== id));
    } else {
      this.favs.set([...current, id]);
    }
    this.saveToStorage();
  }
}
