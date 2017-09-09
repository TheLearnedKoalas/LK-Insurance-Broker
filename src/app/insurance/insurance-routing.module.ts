import { InsuranceInfoComponent } from './insurance-info/insurance-info.component';
import { InsuranceFormComponent } from './forms/insurance-form/insurance-form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const insuranceRoutes: Routes = [
  { path: '', component: InsuranceInfoComponent },
  { path: 'online', loadChildren: '../online/online.module#OnlineModule' },
  { path: 'form', component: InsuranceFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(insuranceRoutes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule {
}
