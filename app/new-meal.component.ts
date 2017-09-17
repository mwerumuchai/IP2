import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h3>New Meal</h3>
      <input value="Name" class="form-input" #newName/>
      <input value="Calories" class="form-input" type="number" #newCalories/>
      <input value="Description" class="form-input-details" #newDescription/>
      <button (click)="addMeal(newName, newDescription, newCalories)" class="add-button">Add Meal</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }

  addMeal(newName: HTMLInputElement, newDescription: HTMLInputElement, newCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit([newName.value, newDescription.value, newCalories.value]);
    newName.value = "";
    newDescription.value = "";
    newCalories.value = "";
  }
}
