import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  // @Output() recipesSelected = new EventEmitter<boolean>();
  // shoppingList;
  // recipes;
  feature;
  onFeatureSelected(feature) {
    this.featureSelected.emit(
      this.feature = feature
    );
  }

  // onSelectRecipes() {
  //   this.recipesSelected.emit(
  //     this.recipes = true
  //   );
  // }
}
