import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OnlineComponent } from './components/online/online.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'online', component: OnlineComponent },
   { path: 'companies', component: CompaniesComponent },
   { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
