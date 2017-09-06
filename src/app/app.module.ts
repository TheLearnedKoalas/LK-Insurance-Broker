import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { InsuranceModule } from './insurance/insurance.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { AboutComponent } from './components/about/about.component';
import { OnlineComponent } from './components/online/online.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


import { Ng2BreadcrumbModule, BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { SidebarModule } from 'ng-sidebar';


// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OnlineComponent,
    CompaniesComponent,
    AboutComponent,
    CarouselComponent,
    FooterComponent,
    SidebarComponent

  ],
  imports: [
    Ng2BreadcrumbModule,
    SidebarModule.forRoot(),
    InsuranceModule,
    // NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
