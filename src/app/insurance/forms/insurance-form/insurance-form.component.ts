import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    clientType: ''
  };

  vehicle = {
    vehicleType: '',
    vehiclePower: '',
    firstReg: '',
    purpose: ''
  };

  sub;

  insurance = {
    insuranceCompany: '',
    startingDate: '',
    totalPayment: '',
    paymentsCount: ''
  };
  constructor(private activateRoute: ActivatedRoute,
    private route: Router, ) { }

  CreatePolicy() {
    console.log(this.insurance);
  }

  FindPolicy() {

  }

  ngOnInit() {
    this.sub = this.activateRoute.queryParams
      .subscribe(params => {
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

      });
  }

}
