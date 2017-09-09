//  import { InsuranceModule } from './../insurance/insurance.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineRoutingModule } from './online-routing.module';
import { SharedModule } from '../shared/shared.module';


import { CalcQuestionaryComponent } from './calc-questionary/calc-questionary.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OnlineRoutingModule,
    SharedModule,
    FormsModule,
    // InsuranceModule
  ],
  declarations: [
    CalcQuestionaryComponent,
],
  exports: [CalcQuestionaryComponent, CommonModule],
})
export class OnlineModule { }
