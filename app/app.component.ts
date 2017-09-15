import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal tracker</h1>
    <div class="meals-info">
        <meal-list
          [mealList]="meals"
          (onMealSelect)="mealWasSelected($event)">
        </meal-list>
      </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Chicken Burger", "Ordered a salad on the side instead of fries.", 375),
      new Meal("Ugali beef", "Didn't have enough meat.", 150),
      new Meal("Pizza", "Had extra toppings, which I like.", 450)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log("parent", clickedMeal);
  }

}
