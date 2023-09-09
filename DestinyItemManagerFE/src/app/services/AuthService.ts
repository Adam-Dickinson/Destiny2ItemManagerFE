import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userToken: string | null = null;

  constructor() {}

  set userToken(token: string) {
    this._userToken = token;
    localStorage.setItem('userToken', token);  // Save token to local storage
  }

  get userToken(): string | null {
    if (!this._userToken) {
      this._userToken = localStorage.getItem('userToken');  // Retrieve token from local storage
    }
    return this._userToken;
  }

  clearToken() {
    this._userToken = null;
    localStorage.removeItem('userToken');
  }
}