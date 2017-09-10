import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string;
  password1: string;
  password2: string;
  passwordFail: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  signup() {
    if (this.password1 !== this.password2) {
      this.passwordFail = true;
    } else {
      this.passwordFail = false;
      this.userService.register(this.username, this.password1);
      console.log(this.userService.loggedInUser);
    }
  }

  cancel() {
    this.router.navigate(['/auth/login']);
  }
}
