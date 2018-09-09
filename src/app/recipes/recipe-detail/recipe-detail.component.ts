import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shoppingList.service';
import {Ingredient} from '../../shared/ingredient.model';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeItem: Recipe;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToSl() {
   this.shoppingListService.addIngredientsToSl(
     this.recipeItem.ingredients
   );
   console.log(this.recipeItem.ingredients.toString());
  }

    
}
