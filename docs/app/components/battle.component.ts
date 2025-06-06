import { Component, Input } from '@angular/core';
import { Hero } from '../classes/hero';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'battle',
    template: `
    <div class="bg-gray-700 p-4 rounded-lg shadow-lg w-64 h-auto">
        <mat-card class="rounded-lg p-10 bg-blue-600">
            <mat-card-header>{{battleShout()}}</mat-card-header>
            <mat-card-content>
                <audio autoplay [volume]="0.25">
                    <source src="../assets/time-of-bliss-212074.mp3" type="audio/mp3">
                </audio>
            </mat-card-content>
        </mat-card>
    </div>`,
    standalone: true,
    styleUrls: [],
    imports: [MatCardModule]
})
export class BattleComponent {

    @Input({ required: true })
    heroes!: string[];

    title = 'Battle Component';
    heroesString: string = '';

    battleShout(): string {
        this.heroesString = this.heroes.join(', ');
        return this.heroesString + ' is ready to battle!';
    }
}