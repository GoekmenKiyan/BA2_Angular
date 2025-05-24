import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  query = '';
  diet = '';
  sort = '';

  @Output() onSearch = new EventEmitter<{ query: string; diet: string; sort: string }>();

  submit() {
    this.onSearch.emit({
      query: this.query.trim(),
      diet: this.diet,
      sort: this.sort
    });
  }
}
