import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.userService.login(this.username, this.password);
  }

  signup() {
    this.router.navigate(['/auth/signup']);
  }

  cancel() {
    this.router.navigate(['']);
  }
}
