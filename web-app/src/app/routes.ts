import { NavRoute } from './classes/navRoute';
import { HomeComponent } from './components/home.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
import { MainMenuComponent } from './menus/main-menu.component';
import { Routes, Route } from '@angular/router';

export const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'tool-menu',
    component: MainMenuComponent,
    title: 'Tool Menu',
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

export const navRoutes = {
  HOME: new NavRoute('', 'Home'),
  TOOL_MENU: new NavRoute('/tool-menu', 'Tool Menu'),
  SALES_ANALYSIS: new NavRoute('/sales-analysis', 'Sales Analyzer'),
};
