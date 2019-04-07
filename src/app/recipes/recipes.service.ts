import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://png.pngtree.com/element_our/md/20180402/md_5ac1ec7ec581b.png',
      ingredients: ['French Fries', 'Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Flower',
      imageUrl: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ingredients: ['French Fries2', 'Meat2', 'Salad2']
    }
  ];

  constructor() { }

  getAllRecipes() {
    // return [...Array] returns all array in a new array.
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    // return {...object} returns the object in a new object.
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
