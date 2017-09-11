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
import { InsuranceService } from './insurance/services/insurance.service';
import { ClientService } from './insurance/services/client.service';
import { VehicleService } from './insurance/services/vehicle.service';
// import { SidebarModule } from 'ng-sidebar';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AuthModule } from './auth/auth.module'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/in-memory-data.service';
import { UserService } from "./shared/user/user.service";
import { DataUserService } from "./data/user/data-user.service";

import { DataClientService } from "./data/insurance/data-client.service";
import { DataVehicleService } from "./data/insurance/data-vehicle.service";
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { UserModule } from "./user/user.module";
import { AdminPaneComponent } from './components/admin-pane/admin-pane.component';
import { AdminGuard } from "./shared/guards/admin.guard";
import { AdminSearchDetailsComponent } from './components/admin-search-details/admin-search-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CarouselComponent,
    AdminPaneComponent,
    AdminSearchDetailsComponent
  ],
  imports: [
    SharedModule,
    Ng2BreadcrumbModule,
    // SidebarModule.forRoot(),
    // NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AuthModule,
    UserModule,
    AppRoutingModule,
    FormsModule,
    InsuranceModule,
    OnlineModule,
    ReactiveFormsModule,
    // PopupModule
  ],
  providers: [BreadcrumbService, UserService, DataUserService, InsuranceService, ClientService, DataClientService, VehicleService, DataVehicleService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }