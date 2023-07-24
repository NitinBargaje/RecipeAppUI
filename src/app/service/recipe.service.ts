import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is a simple test',
      'https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg',
      [
        new Ingredient('Tomato', 10)
      ]),
    new Recipe('A Test Recipe 2', 'This is a complex test', 'https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg',
      [
        new Ingredient('Carrot', 10)
      ])
  ]

  selectedRecipeEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
