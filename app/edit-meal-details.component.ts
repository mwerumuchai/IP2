import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="edit-details">
      <h3>Edit Details <span class="pipe-style">|</span> <span class="meal-name-style">{{ meal.name }}</span></h3>
      <input [(ngModel)]="meal.name" class="input-edit-meal"/>
      <input [(ngModel)]="meal.calories" class="input-edit-meal"/>
      <input [(ngModel)]="meal.description" class="input-edit-description"/>
      <button (click)="EditMeal(newName, newDescription, newCalories)" class="edit-button">Edit</button>
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
