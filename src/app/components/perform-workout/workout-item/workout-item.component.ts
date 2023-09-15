
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.css']
})
export class WorkoutItemComponent {

  @Input() exercise!: any;
  @Input() workoutId!: number;

  

  

}
