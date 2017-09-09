import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
// import { OnlineModule } from '../online/online.module';
import { InsuranceRoutingModule } from './insurance-routing.module';
import { FormsModule } from '@angular/forms';

import { InsuranceInfoComponent } from './insurance-info/insurance-info.component';
import { InsuranceFormComponent } from './forms/insurance-form/insurance-form.component';
import { VehicleFormComponent } from './forms/vehicle-form/vehicle-form.component';
import { ClientFormComponent } from './forms/client-form/client-form.component';
import { CompaniesComponent } from './companies/companies.component';

@NgModule({
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    SharedModule,
    FormsModule,
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
