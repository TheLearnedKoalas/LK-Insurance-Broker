import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password1: string;

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.userService.login(this.email, this.password1);
    this.userService.verifyUser();
  }

  signup() {
    this.router.navigate(['/auth/signup']);
  }

  cancel() {
    this.router.navigate(['']);
  }
}
