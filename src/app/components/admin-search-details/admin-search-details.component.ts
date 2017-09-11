import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from "../../models/interfaces/user";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../shared/user/user.service";
import { Subscription } from "rxjs/Subscription";
import { DataUserService } from "../../data/user/data-user.service";

@Component({
  templateUrl: './admin-search-details.component.html',
  styleUrls: ['./admin-search-details.component.css']
})
export class AdminSearchDetailsComponent implements OnInit, OnDestroy {
  currentUser: IUser;
  id: number;
  subscription: Subscription;
  constructor(private route: ActivatedRoute, private dataUserService: DataUserService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.dataUserService.getUserById(this.id)
      .then((user) => {
        this.currentUser = user;
      })
      .catch(console.log);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
