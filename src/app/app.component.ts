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
    breadcrumbService.addFriendlyNameForRoute('/online', 'Online Застраховане');
    breadcrumbService.addFriendlyNameForRoute('/companies', 'Застрахователни компании');
    breadcrumbService.addFriendlyNameForRoute('/about', 'За нас');
  }
}
