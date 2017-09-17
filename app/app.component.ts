import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h2 class="title">Food Diary</h2>
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
  public meals: Meal[] = [];
  constructor(){
    this.meals = [
      new Meal("Chicken Burger", "The service was slow", 350, 0),
      new Meal("Pizza", "Had extra toppings which I like", 600, 1),
    ];
  }

  mealWasSelected(clickedMeal: Meal): void {
    console.log("parent", clickedMeal);
  }
}
