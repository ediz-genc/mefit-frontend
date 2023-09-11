import {Component, ViewChild, OnInit, HostListener} from '@angular/core';
import {User} from 'src/app/models/user.model';
import {LoginService} from 'src/app/services/login.service';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @ViewChild('userSettings') userSettings: any; // Reference to the section element
  formVisible = false; // Track whether the form is visible
  isToggleOpen = true;

  public currentUser:User = this.userService.getCurrentUser();
  // currentUser: User = {
  //   id: "0",
  //   username: '',
  //   profilePicUrl: '',
  //   bio: '',
  //   weight: 0,
  //   length: 0,
  //   currentGoalId: 0,
  //   goalHistoryId: []
  // };

  constructor(
    private userService: UserService,
    private readonly loginService: LoginService) {
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    if (!this.isToggleOpen) {
      return;
    }

    // Check if the click target is outside of the toggleable section
    const toggleableSection = document.querySelector('.user-settings');
    if (toggleableSection && !toggleableSection.contains(event.target as Node)) {
      this.closeToggle();
    }
  }

  ngOnInit(): void {
    this.userService.getUserById(this.loginService.getTokenId()).subscribe((data) => {
      this.currentUser = {
        id: data.id,
        username: data.username,
        profilePicUrl: data.profilePicUrl,
        bio: data.bio,
        weight: data.weight,
        length: data.length,
        currentGoalId: data.currentGoalId,
        goalHistoryId: data.goalHistoryId
      }
    });
  }

  toggleForm() {
    this.formVisible = !this.formVisible;
    const userSettingsElement = this.userSettings.nativeElement;
    const toggleButton = userSettingsElement.querySelector('.toggle-button');
    if (this.formVisible) {
      toggleButton.classList.add('expanded');
    } else {
      toggleButton.classList.remove('expanded');
    }
  }
  openToggle() {
    this.isToggleOpen = true;
  }

  closeToggle() {
    this.isToggleOpen = false;
  }

}
