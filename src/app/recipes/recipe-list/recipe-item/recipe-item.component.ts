import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {

  constructor(private recipeService: RecipeService) {

  }

  @Input() recipe: Recipe;

  selectRecipe() {
    this.recipeService.selectedRecipeEvent.emit(this.recipe);
  }
}
