
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet],
    template: `
      <main>
        <router-outlet></router-outlet>
      </main>
    `,
    standalone: true
})

export class AppComponent {
  title = 'web-app';
}
