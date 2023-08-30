import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private readonly router: Router){}

  ngOnInit(): void {}

  logout(): void {
    this.router.navigateByUrl('login').then(r => true)
  }

}
