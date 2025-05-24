import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  handleSearch({ query, diet, sort }: { query: string, diet: string, sort: string }) {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (diet) params.set("diet", diet);
    if (sort) params.set("sort", sort);
    this.router.navigateByUrl(`/search?${params.toString()}`);
  }

  navigateToFavorites() {
    this.router.navigate(['/favorites']);
  }

}
