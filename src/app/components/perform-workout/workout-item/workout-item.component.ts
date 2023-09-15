import { Component, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.css']
})
export class WorkoutItemComponent {


  @Input() exercise!: any;

}
