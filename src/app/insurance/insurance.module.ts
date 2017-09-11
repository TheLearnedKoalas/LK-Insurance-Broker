import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { InsuranceRoutingModule } from './insurance-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InsuranceInfoComponent } from './insurance-info/insurance-info.component';
import { InsuranceFormComponent } from './forms/insurance-form/insurance-form.component';
import { VehicleFormComponent } from './forms/vehicle-form/vehicle-form.component';
import { ClientFormComponent } from './forms/client-form/client-form.component';
import { CompaniesComponent } from './companies/companies.component';

import { ClientService } from './services/client.service';
import { InsuranceService } from './services/insurance.service';
import { VehicleService } from './services/vehicle.service';

@NgModule({
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InsuranceInfoComponent,
    InsuranceFormComponent,
    VehicleFormComponent,
    ClientFormComponent,
    CompaniesComponent
  ],
  exports: [InsuranceInfoComponent, InsuranceFormComponent,
    VehicleFormComponent, ClientFormComponent, CompaniesComponent, CommonModule],
})
export class InsuranceModule {
}
