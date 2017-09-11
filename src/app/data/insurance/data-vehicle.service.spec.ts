/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataVehicleService } from './data-vehicle.service';

describe('Service: DataVehicle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataVehicleService]
    });
  });

  it('should ...', inject([DataVehicleService], (service: DataVehicleService) => {
    expect(service).toBeTruthy();
  }));
});