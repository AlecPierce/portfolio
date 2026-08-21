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
  standalone: true,
})
export class AppComponent {
  root = document.documentElement;

  constructor() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.root.classList.remove('light');
      this.root.classList.add('dark');
    } else {
      this.root.classList.remove('dark');
      this.root.classList.add('light');
    }
  }
}
