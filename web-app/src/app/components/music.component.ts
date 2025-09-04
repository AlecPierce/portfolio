import { Component, Input } from '@angular/core';

@Component({
  selector: 'music',
  template: `
    <div class="grid justify-items-center text-white">
      <div class="music-src-title px-2">
        {{ musicSrcTitle }}
      </div>
      @if(musicOn) {
      <audio autoplay loop [volume]="calcMusicVolume(musicVolume)">
        <source [src]="musicSrc" type="audio/mp3" />
      </audio>
      }

      <div class="px-2">Volume: {{ musicVolume }}%</div>
      <div>
        @if(musicVolume < 100) {
        <button
          type="button"
          (click)="increaseMusicVolume()"
          class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
        >
          +
        </button>
        } @if(musicVolume == 100) {
        <button
          type="button"
          (click)="increaseMusicVolume()"
          disabled
          class="cursor-not-allowed text-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:border-gray-800"
        >
          +
        </button>
        } @if(musicVolume > 0) {
        <button
          type="button"
          (click)="decreaseMusicVolume()"
          class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
        >
          -
        </button>
        } @if(musicVolume == 0) {
        <button
          type="button"
          (click)="decreaseMusicVolume()"
          disabled
          class="cursor-not-allowed text-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:border-gray-800"
        >
          -
        </button>
        }
      </div>

      <div>
        @if(musicOn) {
        <button
          type="button"
          (click)="toggleMusic()"
          class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
        >
          Stop
        </button>
        } @if(!musicOn) {
        <button
          type="button"
          (click)="toggleMusic()"
          class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
        >
          Start
        </button>
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
  musicOn: boolean = true;

  increaseMusicVolume() {
    if (this.musicVolume == 100) {
      return;
    } else if (this.musicVolume < 100) {
      this.musicVolume += 5;
    }
  }

  decreaseMusicVolume() {
    if (this.musicVolume == 0) {
      return;
    } else if (this.musicVolume > 0) {
      this.musicVolume -= 5;
    }
  }

  toggleMusic() {
    this.musicOn = !this.musicOn;
  }

  calcMusicVolume(musicVolume: number): number {
    let calcdMusicVolume = musicVolume / 100;
    return calcdMusicVolume;
  }
}
