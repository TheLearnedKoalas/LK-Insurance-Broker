import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { PopupModule } from 'ng2-opd-popup';

import { OnlineModule } from './online/online.module';
import { InsuranceModule } from './insurance/insurance.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { Ng2BreadcrumbModule, BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { InsuranceService } from './insurance/insurance.service';
// import { SidebarModule } from 'ng-sidebar';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CarouselComponent
  ],
  imports: [
    SharedModule,
    Ng2BreadcrumbModule,
    // SidebarModule.forRoot(),
    InsuranceModule,
    OnlineModule,
    // NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    // PopupModule
  ],
  providers: [BreadcrumbService, InsuranceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
