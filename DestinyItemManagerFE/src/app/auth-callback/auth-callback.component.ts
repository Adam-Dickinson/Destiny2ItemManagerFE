import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // <-- Make sure to import Router
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  success: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private authService: AuthService,
    private router: Router  // <-- Inject the Router service
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const userToken = params['userToken'];
      if (userToken) {
        this.authService.userToken = userToken;
        this.success = true;
        this.router.navigate(['/dashboard']);  // <-- Navigate to dashboard or any other route
      } else {
        this.success = false;
      }
    });
  }
}
