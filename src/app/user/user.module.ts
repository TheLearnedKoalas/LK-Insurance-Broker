import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ProfileGuard } from "../shared/guards/profile.guard";
import { UserInsurancesComponent } from "./user-insurances/user-insurances.component";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user/user.component';
import { FormsModule } from "@angular/forms";

const UserRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'profile', component: UserProfileComponent, canActivate: [ProfileGuard] },
      { path: 'insurances', component: UserInsurancesComponent, canActivate: [ProfileGuard] },
      { path: '', pathMatch: 'full', redirectTo: 'profile' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [UserComponent, UserProfileComponent, UserInsurancesComponent],
  providers: [ProfileGuard]
})
export class UserModule { }
