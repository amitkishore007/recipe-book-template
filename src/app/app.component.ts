import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'recipe-book';
  selectedRecipe = 'recipe';

  onNavigate(eventData: string) {
    this.selectedRecipe = eventData;
  }

}
