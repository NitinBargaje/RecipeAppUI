import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  selectedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnInit(): void {
    this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  onSelect(index: number) {
    this.selectedIngredient = this.ingredients[index];
  }
}
