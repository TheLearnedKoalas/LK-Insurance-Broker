import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';

import { UserService } from './shared/user.service';
import { DataUserService } from "../data/user/data-user.service";

const AuthRoutes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            { path: '', component: MenuComponent, canActivate: [UserService] }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(AuthRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AuthComponent,
        MenuComponent,
        LoginComponent,
        SignupComponent
    ],
    providers: [
        DataUserService,
        UserService,
    ]
})
export class AuthModule { }