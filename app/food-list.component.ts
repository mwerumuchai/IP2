import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
  <select (change)="onFullnessChange($event.target.value)">
    <option value="viewAll">View All</option>
    <option value="highCalories">High Calories</option>
    <option value="lowCalories">Low Calories</option>
  </select>
  <hr>
  <div *ngFor="let meal of meals | highCalories:filterByCalories | lowCalories:filterByType">
  <ul (click)="selectMeal(meal)">
    <li>Name: {{ meal.name }} </li>
    <li>Calories: {{ meal.calories }} </li>
    <li>Description: {{ meal.description }} </li>
  </ul>
  <hr>
  `
})
export class MealListComponent {
  @Input() meals: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "highCalories";
  filterByType: string = "lowCalories";

  selectMeal(meal: Meal) {
    this.clickSender.emit(meal);
  }
  onCaloriesChange(option){
    this.filterByCalories = option;
  }
  onTypeChange(option){
    this.filterByType = option;
  }

}
