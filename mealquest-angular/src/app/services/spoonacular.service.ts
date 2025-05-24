import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpoonacularService {
  private baseUrl = 'https://api.spoonacular.com/recipes';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string, diet: string = '', sort: string = '', nextOffset: number) {
    const params: any = {
      apiKey: environment.apiKey,
      number: 20,
      offset: nextOffset,
      addRecipeInformation: true,
    };

    if (query) params.query = query;
    if (diet) params.diet = diet;
    if (sort) params.sort = sort;

    return this.http
      .get<any>(`${this.baseUrl}/complexSearch`, { params })
      .pipe(map((res) => res.results));
  }

  getRandomRecipes(count: number = 5) {
    return this.http
      .get<any>(`${this.baseUrl}/random?apiKey=${environment.apiKey}&number=${count}`)
      .pipe(map((res) => res.recipes));
  }

  getRecipeDetails(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}/information`, {
      params: {
        apiKey: environment.apiKey,
      },
    });
  }
}
