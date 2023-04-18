import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn$: Subject<boolean> = new Subject();
  isLoggedInObs$ = this.isLoggedIn$.asObservable();
}
