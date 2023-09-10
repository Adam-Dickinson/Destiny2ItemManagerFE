import { Component, OnInit, ViewChild  } from '@angular/core';
import { AuthService } from '../services/AuthService';
import { BungieService } from '../services/BungieService';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  userData: any;

  constructor(private bungieService: BungieService, private authService: AuthService) {}

  ngOnInit(): void {

  }

  isNavbarVisible: boolean = false;

  showProfileDetails = false;

  toggleProfileDetails() {
    this.showProfileDetails = !this.showProfileDetails;
  }

  getCharacters(): void {
    const userToken = this.authService.userToken;
    if (userToken) {
      this.isNavbarVisible = !this.isNavbarVisible;
      this.bungieService.getCurrentBungieUser(userToken).subscribe(data => {
        this.userData = data;
        console.log(data.Response);
      });
    } else {
      console.error('user token not found');
    }
  }

  onProfileClick(): void {
    console.log("Profile button clicked!"); // Replace with your own logic.
  } 
}
