import { MainMenuComponent } from './menus/main-menu.component';
import { Routes } from '@angular/router';

export const routeConfig: Routes = [
    {
      path: 'hero-menu',
      component: MainMenuComponent,
      title: 'Hero Menu',
    }
  ];