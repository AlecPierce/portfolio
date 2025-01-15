import { Component } from '@angular/core';
import { MainMenuComponent } from './menus/main-menu.component';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    imports: [MainMenuComponent],
    template: `<app-main-menu></app-main-menu>`
})
export class AppComponent {
  title = 'web-app';
}
