import { HomeComponent } from './components/home.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
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
    path: 'sales-analysis',
    component: RealEstateComponent,
    title: 'Sales Analyzer',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
