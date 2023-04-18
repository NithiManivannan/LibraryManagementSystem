import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, public authService: AuthService) {}
  title = 'lms';
  isLoggedInObsLocal$ = this.authService.isLoggedInObs$;

  ngOnInit(): void {}

  logout(): void {
    localStorage.setItem('loggedInStatus', 'false');
    this.authService.isLoggedIn$.next(false);
    this.router.navigate(['login']);
  }
}
