import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from '../classes/hero';
import { MatCardModule } from '@angular/material/card';


@Component({
    selector: 'battle',
    template: `
    <div class="bg-gray-700 p-4 rounded-lg shadow-lg w-64 h-auto">
        <mat-card class="rounded-lg p-10 bg-blue-600">
            <mat-card-header>{{this.heroesString + this.battleCry}}</mat-card-header>
        </mat-card>
    </div>`,
    standalone: true,
    styleUrls: [],
    imports: [MatCardModule]
})
export class BattleComponent implements OnChanges {
    @Input({ required: true })
    heroes!: Hero[];

    title = 'Battle Component';
    heroesString: string = '';
    battleCry: string = ' ready to battle!';

    ngOnChanges(changes: SimpleChanges): void {
            var names: string[] = [];
            this.heroes.forEach((hero) => {
                names.push(hero.heroName);
            })
        this.heroesString = names.join(', ');
    }
}