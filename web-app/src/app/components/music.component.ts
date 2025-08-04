import { Component, Input } from "@angular/core";

@Component({
    selector: 'music',
    template: `
  <div class="grid justify-items-center text-white">
    <div class="music-src-title px-2">
        {{musicSrcTitle}}
    </div>   
    @if(musicOn) { 
    <audio autoplay loop [volume]="calcMusicVolume(musicVolume)">
        <source [src]="musicSrc" type="audio/mp3">
    </audio>
    }


    <div class="px-2">
        Volume: {{musicVolume}}%
    </div>
    <div>
        @if(musicVolume < 100) {
            <button type="button" (click)="increaseMusicVolume()"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mw-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            +</button>
        }
        @if(musicVolume == 100) {
            <button type="button" (click)="increaseMusicVolume()"
                disabled class="cursor-not-allowed text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600">
            +</button>
        }
        @if(musicVolume > 0) {
            <button type="button" (click)="decreaseMusicVolume()"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mw-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            -</button>
        }
        @if(musicVolume == 0) {
            <button type="button" (click)="decreaseMusicVolume()"
                disabled class="cursor-not-allowed text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600">
            -</button>
        }
    </div>

    <div>
    @if(musicOn) {
        <button type="button" (click)="toggleMusic()"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Stop</button>
    }
    @if(!musicOn) {
        <button type="button" (click)="toggleMusic()"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Start</button>
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

    musicVolume: number = 20;
    // calcdMusicVolume: number = 20;
    musicOn: boolean = true;

    increaseMusicVolume() {
        if (this.musicVolume == 100) {
            return;
        } else if (this.musicVolume < 100) {
            this.musicVolume += 5;
        }
        // this.calcdMusicVolume = this.calcMusicVolume(this.musicVolume);
    }

    decreaseMusicVolume() {
        if (this.musicVolume == 0) {
            return;
        } else if (this.musicVolume > 0) {
            this.musicVolume -= 5;
        }
        // this.calcdMusicVolume = this.calcMusicVolume(this.musicVolume);
    }

    toggleMusic() {
        this.musicOn = !this.musicOn;
    }

    calcMusicVolume(musicVolume: number): number {
        let calcdMusicVolume = musicVolume / 100;
        // if (calcdMusicVolume % 5 != 0) {
        //     (musicVolume * 100) - calcdMusicVolume > 0 ? calcdMusicVolume++ : calcdMusicVolume--;
        //     return calcdMusicVolume;
        // }
        return calcdMusicVolume;
    }
}