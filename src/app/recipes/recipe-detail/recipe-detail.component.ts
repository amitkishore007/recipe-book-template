import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeItem: Recipe;
  
  constructor() { }

  ngOnInit() {
  }

}
