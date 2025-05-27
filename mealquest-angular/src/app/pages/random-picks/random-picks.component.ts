import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SpoonacularService } from '../../services/spoonacular.service';

@Component({
  selector: 'app-random-picks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './random-picks.component.html',
  styleUrls: ['./random-picks.component.scss']
})
export class RandomPicksComponent implements OnInit {
  recipes: any[] = [];

  constructor(private spoonacular: SpoonacularService) {}

  ngOnInit(): void {
    this.spoonacular.getRandomRecipes(4).subscribe({
      next: (data) => (this.recipes = data),
      error: (err) => console.error('Fehler beim Laden der Random Picks:', err)
    });
  }
}