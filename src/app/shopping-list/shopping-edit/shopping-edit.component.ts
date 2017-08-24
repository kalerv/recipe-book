import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared-data/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  isFormEmpty = false;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    if (ingName.trim() !== '' && ingAmount.trim() !== '') {
      const newIngredient = new Ingredient(ingName, ingAmount);
      this.shoppingListService.addIngredientToList(newIngredient);
      this.isFormEmpty = false;
    } else {
      this.isFormEmpty = true;
    }
  }
}
