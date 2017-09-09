import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['../insurance-form/insurance-form.component.css']
})
export class VehicleFormComponent implements OnInit {

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

  purposes = [{ name: 'Лично ползване' },
  { name: 'Служебно ползване' },
  { name: 'Таксиметрови превози' },
  { name: 'Състезателен автомобил' },
  { name: 'Учебен' },
  { name: 'Отдаване под наем' },
  { name: 'Превоз на опасни товари' },
  { name: 'МПС със специален режим' },
  { name: 'Тестови' },
  { name: 'Обществен транспорт' },
  { name: 'Производствена дейност' },
  { name: 'Търговска дейност' },
  { name: 'Куриерски услуги' },
  { name: 'Международен транспорт' },
  ];

  constructor() { }

  @Input()
  vehicle = {
    vehicleType: '',
    chassis: '',
    registrationNumber: '',
    brand: '',
    model: '',
    firstReg: '',
    vehiclePower: '',
    purpose: '',
  };

  CreateVehicle() {
    console.log(this.vehicle);
  }

  FindVehicle() {

  }

  ngOnInit() {
  }
}
