import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shoppingList.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  ingredient: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {
  }
  onAddIngredient() {
  //   this.ingredientAdded.emit(
  //     this.ingredient = new Ingredient(
  //     this.nameInput.nativeElement.value,
  //     this.amountInput.nativeElement.value
  //   ),
  // );
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
    this.shoppingListService.ingredientAdded
      .emit(
      this.ingredient = newIngredient
    );

    console.log(this.nameInput.nativeElement.value);
    console.log(this.amountInput.nativeElement.value);
  }
}
