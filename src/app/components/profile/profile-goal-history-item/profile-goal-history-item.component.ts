import { Component, Input } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';

@Component({
  selector: 'app-profile-goal-history-item',
  templateUrl: './profile-goal-history-item.component.html',
  styleUrls: ['./profile-goal-history-item.component.css']
})
export class ProfileGoalHistoryItemComponent {
  @Input() goal!: Goal;
}
