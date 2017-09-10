import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from "../../auth/shared/user.service";
import { IUser } from "../../models/interfaces/user";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  brand = 'LC Broker';
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
