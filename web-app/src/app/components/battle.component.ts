import { Component, Input } from '@angular/core';
import { Hero } from '../classes/hero';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'battle',
  template: `<div class="bg-gray-700 p-4 rounded-lg shadow-lg w-64 h-auto">
    <mat-card class="rounded-lg p-10 bg-blue-600">
      <mat-card-header>{{ battleShout() }}</mat-card-header>
    </mat-card>
  </div>`,
  standalone: true,
  styleUrls: [],
  imports: [MatCardModule],
})
export class BattleComponent {
  @Input({ required: true })
  heroes!: Hero[];

  title = 'Battle Component';
  heroesString: string = '';

  battleShout(): string {
    this.heroesString = this.heroes
      .map((hero) => {
        return hero.heroName;
      })
      .join(', ');
    return this.heroesString + ' ready to battle!';
  }
}
