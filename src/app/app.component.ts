import { Component } from '@angular/core';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { UserService } from "./shared/user/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'app';

  constructor(private breadcrumbService: BreadcrumbService,
    private userService: UserService) {
    breadcrumbService.addFriendlyNameForRoute('/home', 'Начало');
    breadcrumbService.addFriendlyNameForRoute('/companies', 'Застрахователни компании');
    breadcrumbService.addFriendlyNameForRoute('/about', 'За нас');
    breadcrumbService.addFriendlyNameForRoute('/insurances', 'Застраховки');
    breadcrumbService.addFriendlyNameForRoute('/insurances/online', 'Online Застраховане');
    breadcrumbService.addFriendlyNameForRoute('/insurances/online/calculator', 'Калкулатор');
    breadcrumbService.addFriendlyNameForRoute('/auth/login', 'Вход');
    breadcrumbService.addFriendlyNameForRoute('/auth', ' ');
    breadcrumbService.addFriendlyNameForRoute('/auth/signup', 'Регистрация');
    breadcrumbService.addFriendlyNameForRoute('/user/profile', 'Профил');
    breadcrumbService.addFriendlyNameForRoute('/user/insurances', 'Застраховки');
    breadcrumbService.addFriendlyNameForRoute('/admin', 'Админ Панел');
    breadcrumbService.addFriendlyNameForRoute('/user', 'Клиент');
    breadcrumbService.addFriendlyNameForRoute('/details', 'Детайли');
    breadcrumbService.addFriendlyNameForRouteRegex('/insurances/form.*', 'Нова полица');
  }
}
