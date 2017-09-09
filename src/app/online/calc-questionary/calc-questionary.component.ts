import { Component, OnInit } from '@angular/core';
// import { Popup } from 'ng2-opd-popup';

import { InsuranceService } from '../../insurance/insurance.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { InsuranceRoutingModule } from "../../insurance/insurance-routing.module";

@Component({
  selector: 'app-calc-questionary',
  templateUrl: './calc-questionary.component.html',
  styleUrls: ['./calc-questionary.component.css']
})
export class CalcQuestionaryComponent implements OnInit {

  vehicleTypes = [{ value: '2', name: 'Лек автомобил' },
  { value: '3', name: 'Товарен автомобил' },
  { value: '4', name: 'Мотопед' },
  { value: '5', name: 'Мотоциклет' },
  { value: '6', name: 'Триколка' },
  { value: '7', name: 'Багажно ремарке' },
  { value: '8', name: 'Товарно ремарке' },
  { value: '9', name: 'Седлови влекач' },
  { value: '10', name: 'Автобус, Микробус, Тролейбус' },
  { value: '13', name: 'Трамвайна мотриса' },
  { value: '14', name: 'Строителна техника' },
  { value: '15', name: 'Горска техника' },
  { value: '16', name: 'Земеделска техника' },
  { value: '17', name: 'Вътрешнозаводски транспорт' },
  { value: '22', name: 'Къмпинг ремарке' },
  { value: '19', name: 'Електрокар или мотокар' }];

  showed = false;

  constructor(private router: Router) { }

  offer = {
    vehicleType: '',
    vehiclePower: '',
    clientType: '',
    clientAge: '',
    driverExperience: '',
    firstReg: '',
    purpose: '',
    paymentDetails: ''
  };

  onSubmit() {
    this.showed = true;
    // this.policy = this.insuranceService.createInsurance(this.offer);
  }

  onSubmitPolicyDetails() {
    this.router.navigate(['/insurances/form'], { queryParams: this.offer });
  }

  ngOnInit() {
  }
}
