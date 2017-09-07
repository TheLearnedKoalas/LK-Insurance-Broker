import { OnlineComponent } from './online/online.component';
import { InsuranceInfoComponent } from './insurance-info/insurance-info.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const insuranceRoutes: Routes = [
  { path: '', component: InsuranceInfoComponent },
  { path: 'online', component: OnlineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(insuranceRoutes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule {
 }
