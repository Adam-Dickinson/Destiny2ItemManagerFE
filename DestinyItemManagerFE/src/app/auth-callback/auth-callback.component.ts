import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})

export class AuthCallbackComponent implements OnInit {

  success: boolean = false;

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const userToken = params['userToken'];
      if (userToken) {
        this.authService.userToken = userToken;
        this.success = true;
      } else {
        this.success = false;
      }
    });
  }
}
