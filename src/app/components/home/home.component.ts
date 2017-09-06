import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  insurances = [{
    name: 'Гражданска Отговорност', logo: 'https://izbiram.bg/tmp/mtpl_0.png'
  },
  { name: 'Каско', logo: 'https://izbiram.bg/tmp/kasko%20copy.png' },
  { name: 'Имущество', logo: 'https://izbiram.bg/tmp/property-insurance.png' }];

  constructor() { }

  ngOnInit() {
  }

}
