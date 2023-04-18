import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
/**
 * @title login demo
 */
@Component({
  selector: 'app-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  show: boolean = false;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private router: Router, public authService: AuthService) {}

  submit() {
    const { username, password } = this.loginForm.value;
    if (username == 'admin' && password == 'admin') {
      localStorage.setItem('loggedInStatus', 'true');
      this.router.navigate(['home']);
      this.authService.isLoggedIn$.next(true);
    } else if (username == 'hari' && password == 'hari') {
      localStorage.setItem('loggedInStatus', 'true');
      this.router.navigate(['home']);
      this.authService.isLoggedIn$.next(true);
    } else {
      localStorage.setItem('loggedInStatus', 'false');
    }
  }
}
