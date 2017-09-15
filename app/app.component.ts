import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
     ></meal-list>
     <!--<edit-task
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-task>
    <new-task
      (newMealSender)="addMeal($event)"
    ></new-task>-->
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Create To-Do List app.", 0),
      new Meal("Learn Kung Fu.", 1),
      new Meal("Rewatch all the Lord of the Rings movies.", 2),
      new Meal("Do the laundry.", 3)
  ];
  /*selectedTask: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addTask(newTaskFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }*/
}
