import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe',
      'Just a Test',
      '../assets/images/img1.jpg',
      [
        new Ingredient('Chapati', 1),
        new Ingredient('Tomatoes', 2)
      ]),
    new Recipe('Another Test Recipe',
      'Just a Test',
      '../assets/images/img3.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ])
  ];

  getRecipes() {
   return this.recipes.slice();
  }
}
