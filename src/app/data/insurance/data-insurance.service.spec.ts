/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataInsuranceService } from './data-insurance.service';

describe('Service: DataInsurance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataInsuranceService]
    });
  });

  it('should ...', inject([DataInsuranceService], (service: DataInsuranceService) => {
    expect(service).toBeTruthy();
  }));
});