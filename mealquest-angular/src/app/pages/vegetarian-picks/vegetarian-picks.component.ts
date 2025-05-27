import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SpoonacularService } from '../../services/spoonacular.service';

@Component({
  selector: 'app-vegetarian-picks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vegetarian-picks.component.html',
  styleUrls: ['./vegetarian-picks.component.scss']
})
export class VegetarianPicksComponent implements OnInit {
  recipes: any[] = [];

  constructor(private spoonacular: SpoonacularService) {}

  ngOnInit(): void {
  this.spoonacular.searchRecipes('', 'vegetarian', '', 0).subscribe({
    next: (data) => {
      console.log('DEBUG Vegetarian Picks API Response:', data);
      this.recipes = data.slice(0, 3);
    },
    error: (err) =>
      console.error('Fehler beim Laden der Vegetarian Picks:', err)
  });
}

}