import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcQuestionaryComponent } from './calc-questionary/calc-questionary.component';
import { ProfileGuard } from "../shared/guards/profile.guard";

export const onlineRoutes: Routes = [
  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalcQuestionaryComponent,canActivate: [ProfileGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(onlineRoutes)],
  exports: [RouterModule]
})
export class OnlineRoutingModule { }
