import { Component, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal tracker</h1>
  </div>
  <h1>Log food</h1>
  <div>
  <label>Meal Name</label>
    <input #newName>
  <label>Mal Description</label>
    <input #newDescription>
  <label>Meal Calories</label>
    <input #newCalories>
  <button (click)="submitForm(newName.value,
    newDescription.value,
    newCalories.value);
    newName.value='';
    newDescription.value='';
    newCalories.value='';">Add</button>
  </div>
  `
})


export class AppComponent {
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
