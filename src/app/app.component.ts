import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: dodgerblue;
  }
  `]
})
export class AppComponent {

  selectedFeature = 'recipe';
  onShoppingListSelected(shoppingListClicked) {
    this.selectedFeature = shoppingListClicked;
  }

  onRecipesSelected(recipeClicked) {
   this.selectedFeature = recipeClicked;
  }

}
