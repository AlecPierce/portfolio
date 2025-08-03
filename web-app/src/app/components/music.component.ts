import { Component, Input } from "@angular/core";

@Component({
  selector: 'music',
  template: `
  <div class="grid justify-items-center">
    <div class="music-src-title px-2">
        {{musicSrcTitle}}
    </div>   
    @if(musicOn) { 
    <audio autoplay loop [volume]="musicVolume">
        <source [src]="musicSrc" type="audio/mp3">
    </audio>
    }


    <div class="px-2">
        {{calcMusicVolume(musicVolume)}}%
    </div>
    <div>
    <button type="button" (click)="increaseMusicVolume()"
    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mw-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        +</button>
    <button type="button" (click)="decreaseMusicVolume()"
    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mw-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        -</button>
    </div>

    <div>
    @if(musicOn) {
        @if(musicVolume > 0) {
            <button type="button" (click)="toggleMusic()"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Stop</button>
        }
        @if(musicVolume == 0) {
            <!-- disabled -->
            <button type="button" disabled
            class="cursor-not-allowed text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600">
            Stop</button>
        }
    }
    @if(!musicOn) {
        @if(musicVolume > 0) {
            <button type="button" (click)="toggleMusic()"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Start</button>
        }
        @if(musicVolume == 0) {
            <!-- disabled -->
            <button type="button" disabled
            class="cursor-not-allowed text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600">
            Start</button>
        }
    }
    </div>
  </div>
`,
  styleUrl: 'music.component.css',
  standalone: true,
  imports: [],
})
export class musicComponent {
    @Input({ required: true })
    musicSrc: string = '';
    @Input({ required: true })
    musicSrcTitle: string = '';

    musicVolume: number = 0.20;
    musicOn: boolean = true;

    increaseMusicVolume() {
        if (this.musicVolume < 1) {
            this.musicVolume += 0.1;
        }
    }

    decreaseMusicVolume() {
        if (this.musicVolume > 0) {
            this.musicVolume -= 0.1;
        }
    }

    toggleMusic() {
        this.musicOn = !this.musicOn;
    }

    calcMusicVolume(musicVolume: number): number {
        return Math.floor(musicVolume * 100);
    }
}