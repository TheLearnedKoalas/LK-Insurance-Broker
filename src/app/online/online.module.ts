import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineRoutingModule } from './online-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CalcQuestionaryComponent } from './calc-questionary/calc-questionary.component';
import { CalcOfferComponent } from './calc-offer/calc-offer.component';
import { PolicyRequestComponent } from './policy-request/policy-request.component';

@NgModule({
  imports: [
    CommonModule,
    OnlineRoutingModule,
    SharedModule
  ],
  declarations: [
    CalcQuestionaryComponent,
    CalcOfferComponent,
    PolicyRequestComponent
],
  exports: [CalcQuestionaryComponent, CommonModule],
})
export class OnlineModule { }
