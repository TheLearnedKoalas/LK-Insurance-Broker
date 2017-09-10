import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  { name: 'Международен транспорт' }];

  constructor(private vehicleService: VehicleService) { }
  @Output()
  loadContent = new EventEmitter<object>();
  @Input()
  public vehicle: FormGroup;
  @Input()
  public vehicleType = new FormControl(this.vehicleTypes[0].name, [Validators.required]);
  @Input()
  public chassis = new FormControl('', []);
  @Input()
  public registrationNumber = new FormControl('', []);
  @Input()
  public brand = new FormControl('', []);
  @Input()
  public model = new FormControl('', []);
  @Input()
  public firstReg = new FormControl('', []);
  @Input()
  public vehiclePower = new FormControl('', []);
  @Input()
  public purpose = new FormControl(this.purposes[0].name, [Validators.required]);

  ngOnInit() {
    this.vehicle = new FormGroup({
      vehicleType: this.vehicleType,
      chassis: this.chassis,
      registrationNumber: this.registrationNumber,
      brand: this.brand,
      model: this.model,
      firstReg: this.firstReg,
      vehiclePower: this.vehiclePower,
      purpose: this.purpose
    });
  }
  CreateVehicle() {
    // console.log(this.vehicle.value);
    
    this.vehicleService.create(this.vehicle.value)
      .subscribe(res => {
        this.loadContent.emit(this.vehicle.value);
      });
  }

  FindVehicle() {
  }
}
