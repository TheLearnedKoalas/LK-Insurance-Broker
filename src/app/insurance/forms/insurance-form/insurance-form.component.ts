import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { InsuranceService } from '../../services/insurance.service';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['../insurance-form/insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {


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

  client = {
    clientType: '',
    name: '',
    id: '',
    adress: ''
  };

  vehicle = {
    chassis: '',
    vehicleType: '',
    vehiclePower: '',
    firstReg: '',
    purpose: ''
  };

  sub;

  today;

  insurance = {
    insuranceCompany: '',
    startDate: '',
    totalPayment: '',
    paymentsCount: ''
  };
  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private insuranceService: InsuranceService
  ) { }

  CreatePolicy() {
    this.insuranceService.create(this.insurance, this.client, this.vehicle)
      .subscribe(x => {
        console.log(x);
        this.router.navigate(['/insurances/form']);
      });
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
    this.client = value;
  }
  parentLoadVehicleContent(value) {
    this.vehicle = value;
  }

  ngOnInit() {
    this.sub = this.activateRoute.queryParams
      .subscribe(params => {
        if (params.hasOwnProperty('paymentDetails')) {
          //    console.log(params);
          const paymentDetails = params.paymentDetails.split('%');
          this.insurance.insuranceCompany = paymentDetails[0];
          const payment = paymentDetails[1].split('*');

          let sum = 0;
          for (let i = 0; i < payment.length; i++) {
            sum += +payment[i];
          }
          this.insurance.totalPayment = sum.toString(); // ith's better to come from param
          this.insurance.paymentsCount = payment.length.toString();
          this.client.clientType = params.clientType;
          this.vehicle.vehicleType = params.vehicleType;
          this.vehicle.vehiclePower = params.vehiclePower;
          this.vehicle.firstReg = params.firstReg;
          this.vehicle.purpose = params.purpose;
        }
      });
  }
}
