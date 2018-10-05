import { RecipeService } from './../recipe.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shoppingList.service';
import {Ingredient} from '../../shared/ingredient.model';
import {forEach} from '@angular/router/src/utils/collection';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipeItem: Recipe;
id: number;
  constructor(private shoppingListService: ShoppingListService,
              private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
    (params: Params) => {
        this.id = params['id'];
        this.recipeItem = this.recipeService.getRecipe(this.id);
    }
    );
  }

  onAddToSl() {
   this.shoppingListService.addIngredientsToSl(
     this.recipeItem.ingredients
   );
  }

}
