import { Component } from '@angular/core';
import { FitnessLevel } from 'src/app/enums/fitness-level.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  fitnessLevel: FitnessLevel = FitnessLevel.Intermediate; // TEST!

}
