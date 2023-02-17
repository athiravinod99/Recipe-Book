import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public category: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, category:string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.category = category;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
