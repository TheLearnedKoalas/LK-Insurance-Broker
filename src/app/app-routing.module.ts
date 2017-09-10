import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompaniesComponent } from './insurance/companies/companies.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'online', component: OnlineComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'insurances', loadChildren: './insurance/insurance.module#InsuranceModule' },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
