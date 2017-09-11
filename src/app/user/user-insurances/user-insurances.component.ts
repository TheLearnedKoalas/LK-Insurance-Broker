import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from "../../shared/user/user.service";
import { Subscription } from "rxjs/Subscription";
import { IUser } from "../../models/interfaces/user";

@Component({
  templateUrl: './user-insurances.component.html',
  styleUrls: ['./user-insurances.component.css']
})
export class UserInsurancesComponent implements OnInit, OnDestroy {
  currentUser: IUser;
  subscription: Subscription;

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
}
