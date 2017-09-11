import { Component, OnInit } from '@angular/core';
import { IUser } from "../../models/interfaces/user";
import { Subscription } from "rxjs/Subscription";
import { UserService } from "../../shared/user/user.service";

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: IUser;
  isUpdated: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
  }

  update() {
    this.userService.updateProfile(this.currentUser).then(() => {
      this.isUpdated = true;
    })
      .catch(console.log);
  }
}
