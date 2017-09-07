import { PolicyRequestComponent } from './policy-request/policy-request.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcQuestionaryComponent } from './calc-questionary/calc-questionary.component';

export const onlineRoutes: Routes = [
  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalcQuestionaryComponent },
  { path: 'request', component: PolicyRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(onlineRoutes)],
  exports: [RouterModule]
})
export class OnlineRoutingModule { }
