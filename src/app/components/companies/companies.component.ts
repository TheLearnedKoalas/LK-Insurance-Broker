import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companiesList = [{ name: 'АРМЕЕЦ', url: 'http://armeec.bg', logo: 'http://armeec.bg/public/images/logo_bg_ru.png' },
  { name: 'ЛЕВ ИНС', url: 'https://lev-ins.com', logo: 'https://lev-ins.com/content/uploads/2016/12/logo-lev-ins.jpg' },
  { name: 'БУЛ ИНС', url: 'http://www.bulins.com', logo: 'http://www.bulins.com/assets/img/logo.png' }];

  constructor() { }

  ngOnInit() {
  }

}
