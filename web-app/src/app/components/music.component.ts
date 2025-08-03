import { Component, Input } from "@angular/core";

@Component({
  selector: 'music',
  template: `
    @if(musicOn) {
    <div class="music-src-title">
        {{musicSrcTitle}}
    </div>    
    <audio autoplay loop [volume]="musicVolume">
        <source [src]="musicSrc" type="audio/mp3">
    </audio>
    }
    
    <button type="button" (click)="increaseMusicVolume()"
    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        +</button>
    <button type="button" (click)="decreaseMusicVolume()"
    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        -</button>

    <div>
    @if(musicOn && musicVolume != 0) {
        <button type="button" (click)="toggleMusic()"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Off</button>
    }
    @if(!musicOn && musicVolume != 0) {
        <button type="button" (click)="toggleMusic()"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        On</button>
    }
    @if(musicVolume == 0) {
        <!-- disabled -->
        <button type="button" disabled
        class="cursor-not-allowed text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Off</button>
    }
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

    musicVolume: number = 0.10;
    musicOn: boolean = true;
    prevVolume: number = 0;

    increaseMusicVolume() {
        if (this.musicVolume < 1) {
            this.musicVolume += 0.1;
            this.musicOn = true;
        }
    }

    decreaseMusicVolume() {
        if (this.musicVolume > 0) {
            this.musicVolume -= 0.1;
        } else if (this.musicVolume == 0) {
            this.musicOn = false;
        }
    }

    toggleMusic() {
        this.musicOn = !this.musicOn;
    }
}