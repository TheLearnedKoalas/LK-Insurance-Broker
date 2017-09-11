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

  number: number;
  status: string;
  startDate: string;
  endDate: string;
  insuranceCompany: string;
  registrationNumber: string;
  paymentsCount: number;
  totalPayment: number;

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

  private resetValues() {
    this.number = undefined;
    this.status = undefined;
    this.startDate = undefined;
    this.endDate = undefined;
    this.totalPayment = undefined;
    this.paymentsCount = undefined;
    this.insuranceCompany = undefined;
    this.registrationNumber = undefined;
  }

  addInsurance() {
    const currentInsurance = {
      number: this.number,
      status: this.status,
      startDate: new Date(this.startDate),
      endDate: new Date(this.endDate),
      totalPayment: this.totalPayment,
      paymentsCount: this.paymentsCount,
      insuranceCompany: this.insuranceCompany,
      client: {
        clientId: '',
        name: '',
      },
      vehicle: {
        chassis: '',
        registrationNumber: this.registrationNumber,
        brand: '',
        model: ''
      }
    }

    this.currentUser.insurances.push(currentInsurance);
    this.dataUserService.updateUser(this.currentUser);
    this.resetValues();
  }
}
