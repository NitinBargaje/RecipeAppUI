import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/service/shopping-list.service';
// import { Subscription } from ''

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService,
    private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.recipeService.selectedRecipeEvent.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  addToShoppingList() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients.slice())
  }
}
