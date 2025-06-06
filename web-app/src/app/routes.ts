import { MainMenuComponent } from './menus/main-menu.component';
import { Routes } from '@angular/router';

const routeConfig: Routes = [
    {
      path: '',
      component: MainMenuComponent,
      title: 'Hero Menu',
    }
  ];
  export default routeConfig;