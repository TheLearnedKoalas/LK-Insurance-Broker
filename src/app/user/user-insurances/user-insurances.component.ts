import { Component, OnInit } from '@angular/core';
import { UserService } from "../../shared/user/user.service";
import { Subscription } from "rxjs/Subscription";
import { IUser } from "../../models/interfaces/user";

@Component({
  templateUrl: './user-insurances.component.html',
  styleUrls: ['./user-insurances.component.css']
})
export class UserInsurancesComponent implements OnInit {
  currentUser: IUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
  }
}
