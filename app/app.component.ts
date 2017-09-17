import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div align="center">
    <h1><i>Food Diary</i></h1></div>
  <div class="jumbotron">
    <nav class="navbar navbar-default"></nav>
  </div>
    <div class="container" align="left">
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
