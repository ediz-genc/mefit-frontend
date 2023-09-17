import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-progress-circle',
  templateUrl: './dashboard-progress-circle.component.html',
  styleUrls: ['./dashboard-progress-circle.component.css']
})
export class DashboardProgressCircleComponent {

  @Input() percentage!: String;
}
