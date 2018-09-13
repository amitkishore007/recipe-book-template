import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [
    new Ingredient('Test ',12),
    new Ingredient('New Test', 33),
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onIngredientCreated(eventData: Ingredient) {
    this.ingredients.push(eventData);
  }

}
