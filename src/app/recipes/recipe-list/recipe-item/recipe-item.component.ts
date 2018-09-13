import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeEvent = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect() {
    this.recipeEvent.emit();
    return false;
  }

}
