import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

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

  constructor() { }

  content = this.getAll();
  parentLoadContent(value) {
    if (value === 'Застрахователни компании') {
      this.content = this.getAll();
    } else {
      this.content = [this.companiesList.find(x => x.name === value)];
    }
  }

  getAll() {
    const all = [];
    this.companiesList.forEach(x => {
      all.push({ name: x.name, logo: x.logo, url: x.url });
    });
    return all;
  }

  // parentLoadContent(value) {
  //   alert(value);
  //   //  return this.companiesList.find(x => x.name === name);
  // }
  ngOnInit() {
  }
}
