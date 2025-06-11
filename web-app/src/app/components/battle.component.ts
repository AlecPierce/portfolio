import { Component, Input, NgModule } from '@angular/core';
import { Hero } from '../classes/hero';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'battle',
    template: `
    <div class="bg-gray-700 p-4 rounded-lg shadow-lg w-64 h-auto">
        <mat-card class="rounded-lg p-10 bg-blue-600">
            <mat-card-header>{{battleShout()}}</mat-card-header>
            <mat-card-content *ngIf="justMakoto">
                <audio autoplay loop [volume]="0.25">
                    <source src="../assets/persona3-mass-destruction.mp3" type="audio/mp3">
                </audio>
            </mat-card-content>
            <mat-card-content *ngIf="!justMakoto">
            </mat-card-content>
        </mat-card>
    </div>`,
    standalone: true,
    styleUrls: [],
    imports: [MatCardModule, CommonModule]
})
export class BattleComponent {

    @Input({ required: true })
    heroes!: string[];

    title = 'Battle Component';
    heroesString: string = '';
    justMakoto: boolean = false;

    battleShout(): string {
        this.justMakoto = this.heroes[0] === 'Makoto';
        this.heroesString = this.heroes.join(', ');
        return this.heroesString + ' ready to battle!';
    }
}