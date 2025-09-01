import { HomeComponent } from './components/home.component';
import { MainMenuComponent } from './menus/main-menu.component';
import { Routes } from '@angular/router';

export const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Alec Pierce',
  },
  {
    path: 'hero-menu',
    component: MainMenuComponent,
    title: 'Hero System - Hero Menu',
  },
  {
    path: '**',
    redirectTo: ''
  }
];