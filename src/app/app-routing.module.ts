import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompaniesComponent } from './insurance/companies/companies.component';
import { AboutComponent } from './components/about/about.component';
import { AdminPaneComponent } from "./components/admin-pane/admin-pane.component";


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminPaneComponent },
  // { path: 'online', component: OnlineComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'insurances', loadChildren: './insurance/insurance.module#InsuranceModule' },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
