import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompaniesComponent } from './insurance/companies/companies.component';
import { AboutComponent } from './components/about/about.component';
import { AdminPaneComponent } from "./components/admin-pane/admin-pane.component";
import { AdminGuard } from "./shared/guards/admin.guard";
import { AdminSearchDetailsComponent } from "./components/admin-search-details/admin-search-details.component";


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'online', component: OnlineComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'insurances', loadChildren: './insurance/insurance.module#InsuranceModule' },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminPaneComponent, canActivate: [AdminGuard] },
  { path: 'details/:id', component: AdminSearchDetailsComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
