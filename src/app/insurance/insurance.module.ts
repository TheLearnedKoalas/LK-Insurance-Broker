import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { OnlineModule } from '../online/online.module';
import { InsuranceRoutingModule } from './insurance-routing.module';

import { InsuranceInfoComponent } from './insurance-info/insurance-info.component';

@NgModule({
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    SharedModule,
    OnlineModule,
  ],
  declarations: [
    InsuranceInfoComponent,
  ],
  exports: [ InsuranceInfoComponent, CommonModule],
})
export class InsuranceModule {
 }
