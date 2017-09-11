import { Client } from './../../models/client';
import { ThirdPartInsurance } from './../../models/thirdPartInsurance';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl, FormGroupName, ControlContainer, FormBuilder } from '@angular/forms';

import { InsuranceService } from '../../services/insurance.service';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['../insurance-form/insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {
  purpose: any;
  vehiclePower: any;
  firstReg: any;
  model: any;
  brand: any;
  registrationNumber: any;
  chassis: any;
  vehicleType: any;
  sub;
  public insuranceCompany: FormControl;
  public totalPayment: FormControl;

  public paymentsCount: FormControl;

  public startDate: FormControl;

  clientType = '';
  name = '';
  clientId = '';
  adress = '';

  insurance = this.fb.group({
    insuranceCompany: [this.insuranceCompany, []],
    totalPayment: [this.totalPayment, []],
    paymentsCount: [this.paymentsCount, []],
    startDate: [this.startDate, []],
    client: [{
      clientType: this.clientType,
      name: this.name,
      clientId: this.clientId,
      adress: this.adress,
    }, []],
    vehicle: [{
      vehicleType: this.vehicleType,
      chassis: this.chassis,
      registrationNumber: this.registrationNumber,
      brand: this.brand,
      model: this.model,
      firstReg: this.firstReg,
      vehiclePower: this.vehiclePower,
      purpose: this.purpose
    }, []]
  });



  companiesList = [{
    name: 'Армеец', url: 'http://armeec.bg', logo: 'http://armeec.bg/public/images/logo_bg_ru.png',
    // tslint:disable-next-line:max-line-length
    about: `ЗАД „Aрмеец” е част от групата „Химимпорт”, един от най-големите холдинги в България. Създадена преди повече от 60 години, „Химимпорт” АД  се превърна в мащабна холдингова компания, която обединява над 70 дъщерни и асоциирани дружества, осъществяващи дейност в различни сектори от българската икономика - предимно в областта на транспорта и  финансите, както и в производствената сфера.`
  },
  {
    name: 'Лев Инс', url: 'https://lev-ins.com', logo: 'https://lev-ins.com/content/uploads/2016/12/logo-lev-ins.jpg',
    // tslint:disable-next-line:max-line-length
    about: `Застрахователна компания „Лев Инс“ АД е основана през 1996 г. и е сред първите дружества в бранша с изцяло частен капитал, формиран от израелски и български инвеститори. Още от създаването си ЗК „Лев Инс“ АД следва успешно набелязаната посока, като залага на изпреварващи действия, иновативни продукти, коректно отношение и добра комуникация с клиентите. Дружеството е част от финансова група, работеща в областта на Общо застраховане, Животозастраховане, Здравно застраховане и Допълнително пенсионно осигуряване.`
  },
  {
    name: 'Бул Инс', url: 'http://www.bulins.com', logo: 'http://www.bulins.com/assets/img/logo.png',
    // tslint:disable-next-line:max-line-length
    about: `Застрахователната политика на дружеството е ориентирана към компетентно определяне и управление на риска, цялостно консултиране на клиента относно правилния избор на застрахователно покритие, превантивна дейност с цел намаляване вероятността за настъпване на застрахователно събитие, перфектност в извършване на ликвидация при настъпили щети и не на последно място - непрекъснато подобряване обслужването на клиентите.`
  }];

  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private insuranceService: InsuranceService,
    private fb: FormBuilder
  ) { }

  CreatePolicy() { // ugly!!!
    const insurance = this.fb.group({
      insuranceCompany: [this.insuranceCompany, []],
      totalPayment: [this.totalPayment, []],
      paymentsCount: [this.paymentsCount, []],
      startDate: [this.startDate, []],
      client: [{
        clientType: this.clientType,
        name: this.name,
        clientId: this.clientId,
        adress: this.adress,
      }, []],
      vehicle: [{
        vehicleType: this.vehicleType,
        chassis: this.chassis,
        registrationNumber: this.registrationNumber,
        brand: this.brand,
        model: this.model,
        firstReg: this.firstReg,
        vehiclePower: this.vehiclePower,
        purpose: this.purpose
      }, []]
    });
    console.log(insurance.value);
    // this.insuranceService.create(insurance.value)
    //   .subscribe(x => {
    //     console.log(x);
    //     this.router.navigate(['/insurances/form']);
    //   });
  }

  // FindPolicy() { // for admin
  //   this.insuranceService.find(this.client.id, this.vehicle.chassis)
  //     .subscribe(res => {
  //       // console.log(res);
  //       for (const key in this.insurance) {
  //         if (res.hasOwnProperty(key)) {
  //           this.insurance[key] = res[key];
  //         }
  //       }
  //       for (const key in this.client) {
  //         if (res.client.hasOwnProperty(key)) {
  //           this.client[key] = res.client[key];
  //         }
  //       }
  //       for (const key in this.vehicle) {
  //         if (res.vehicle.hasOwnProperty(key)) {
  //           this.vehicle[key] = res.vehicle[key];
  //         }
  //       }
  //     }); // catch error when empty fields
  // }

  parentLoadClientContent(value) {
    this.clientId = value.clientId;
    this.adress = value.adress;
    this.name = value.name;
  }
  parentLoadVehicleContent(value) {
    this.brand = value.brand;
    this.chassis = value.chassis;
    this.firstReg = value.firsReg;
    this.registrationNumber = value.registrationNumber;
    // more
  }

  ngOnInit() { // not loading content
    let count;
    let paymentDetails = [''];
    let sum = 0;
    const clientDetails = { clientType: '' };
    this.insuranceCompany = new FormControl('', [Validators.required]);
    this.sub = this.activateRoute.queryParams
      .subscribe(params => {
        if (params.hasOwnProperty('paymentDetails')) {
          //    console.log(params);
          paymentDetails = params.paymentDetails.split('%');
          const payment = paymentDetails[1].split('*');
          for (let i = 0; i < payment.length; i++) {
            sum += +payment[i];
          }
          count = payment.length.toString();
          clientDetails.clientType = params.clientType;
          this.insuranceCompany = new FormControl(paymentDetails[0], [Validators.required]);
          this.clientType = params.clientType;
          this.vehicleType = params.vehicleType;
          this.vehiclePower = params.vehiclePower;
          this.firstReg = params.firstReg;
          this.purpose = params.purpose;
        }
      });
    this.totalPayment = new FormControl(sum.toString(), [Validators.required]);
  }
}
