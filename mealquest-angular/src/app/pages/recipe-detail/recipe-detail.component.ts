import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpoonacularService } from '../../services/spoonacular.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe = signal<any>(null);
  loading = signal(true);
  activeTab = signal<'instructions' | 'ingredients'>('instructions');

  isFavorite = computed(() => {
    const value = this.recipe();
    return value && this.favService.isFavorite(value);
  });

  constructor(
    private route: ActivatedRoute,
    private spoon: SpoonacularService,
    private favService: FavoritesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spoon.getRecipeDetails(+id).subscribe({
        next: (data) => {
          this.recipe.set(data);
          this.loading.set(false);
        },
        error: (err) => {
          console.error(err);
          this.loading.set(false);
        }
      });
    }
  }

  getCalories(): string {
    const nutrients = this.recipe()?.nutrition?.nutrients;
    const cal = nutrients?.find((n: any) => n.name === 'Calories')?.amount;
    return cal ? `${cal} kcal` : '? kcal';
  }

  toggleFavorite() {
    const value = this.recipe();
    if (value) this.favService.toggleFavorite(value);
  }

  switchTab(tab: 'instructions' | 'ingredients') {
    this.activeTab.set(tab);
  }

}
