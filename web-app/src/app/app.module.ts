import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './menus/main-menu';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
