import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal tracker</h1>
    <meal-list [meals]="meals" (clickSender)="selectMeal($event)"></meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [
      new Meal("Chicken Burger", 375, "Ordered a salad on the side instead of fries."),
      new Meal("Ugali beef", 150, "Didn't have enough meat."),
      new Meal("Pizza", 450, "Had extra toppings, which I like.")
    ];

  selectedMeal = null;


  selectMeal(meal) {
    if(this.selectedMeal === Meal) {
      this.selectedMeal = null;
    } else {
      this.selectedMeal = Meal;
    }
  }
}
