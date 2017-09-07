import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InsuranceInfoComponent } from './insurance-info/insurance-info.component';
import { OnlineComponent } from './online/online.component';

@NgModule({
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    SharedModule
  ],
  declarations: [
    InsuranceInfoComponent,
    OnlineComponent
  ],
  exports: [OnlineComponent, InsuranceInfoComponent, CommonModule],
})
export class InsuranceModule {
 }
