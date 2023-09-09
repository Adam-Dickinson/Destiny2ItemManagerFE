import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  backendUrl = 'https://localhost:443';  // adjust this if your backend is on a different host or port

  startAuthorization() {
    window.location.href = `${this.backendUrl}/authorize`;
  }
}
