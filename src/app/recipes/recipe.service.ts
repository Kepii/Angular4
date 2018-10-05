import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipeItem: Recipe;
  recipes: Recipe[] = [
    new Recipe('Rolex',
      'Super tasty!',
      '../assets/images/img1.jpg',
      [
        new Ingredient('Chapati', 1),
        new Ingredient('Eggs', 2)
      ]),
    new Recipe('Chicken wings',
      'Yummy!',
      '../assets/images/img3.jpg',
      [
        new Ingredient('Chicken-wing(s)', 1),
        new Ingredient('French fries', 20)
      ])
  ];

  getRecipes() {
   return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
   }
}
