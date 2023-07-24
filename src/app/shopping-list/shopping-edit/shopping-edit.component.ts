import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/service/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Input() ingredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingredient = { name: '', amount: undefined };
  }

  add() {
    this.shoppingListService.addIngredient({ ...this.ingredient });
  }
}
