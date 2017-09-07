import { Component } from '@angular/core';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'app';

  constructor(private breadcrumbService: BreadcrumbService) {
    breadcrumbService.addFriendlyNameForRoute('/home', 'Начало');
    breadcrumbService.addFriendlyNameForRoute('/companies', 'Застрахователни компании');
    breadcrumbService.addFriendlyNameForRoute('/about', 'За нас');
    breadcrumbService.addFriendlyNameForRoute('/insurances', 'Застраховки');
    breadcrumbService.addFriendlyNameForRoute('/insurances/online', 'Online застраховане');
  }
}
