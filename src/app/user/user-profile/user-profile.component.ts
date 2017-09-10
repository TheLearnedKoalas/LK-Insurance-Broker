import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from "../../models/interfaces/user";
import { Subscription } from "rxjs/Subscription";
import { UserService } from "../../shared/user/user.service";

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  currentUser: IUser;
  subscription: Subscription;
  isUpdated: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
    this.subscription = this.userService.userChange.subscribe((value) => {
      this.currentUser = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  update() {
    this.userService.updateProfile(this.currentUser).then(() => {
      this.isUpdated = true;
    })
      .catch(console.log);
  }
}
