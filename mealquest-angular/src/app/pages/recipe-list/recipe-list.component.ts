import { Component, OnInit, signal } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { SpoonacularService } from '../../services/spoonacular.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes = signal<any[]>([]);
  loading = signal(false);
  offset = signal(0);
  hasMore = signal(true);
  query = '';
  diet = '';
  sort = '';
  cuisine = '';

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private spoon: SpoonacularService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.query = params.get('q') || '';
      this.diet = params.get('diet') || '';
      this.sort = params.get('sort') || '';
      this.cuisine = params.get('cuisine') || '';
      this.offset.set(0);
      this.recipes.set([]);
      this.hasMore.set(true);
      this.loadMore();
    });

    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (this.loading()) return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      this.loadMore();
    }
  };

  async loadMore() {
    if (!this.hasMore()) return;
    this.loading.set(true);

    try {
      const nextOffset = this.offset();
      const res = await this.spoon
          .searchRecipes(this.query, this.diet, this.sort, nextOffset)
          .toPromise();

      if (res.length === 0) {
        this.hasMore.set(false);
      } else {
        this.recipes.update((old) => [...old, ...res]);
        this.offset.update((v) => v + res.length);
      }
    } catch (err) {
      console.error('Fehler beim Laden der Rezepte', err);
    } finally {
      this.loading.set(false);
    }
  }
}
