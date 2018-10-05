import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  addIngredient(ingredient: Ingredient) {
   return this.ingredients.slice().push(ingredient);
  }
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredientsToSl(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients);
  }
}
