import { Component, Input } from '@angular/core';

@Component({
  selector: 'music',
  template: `
    <div class="grid justify-items-center">
      <div class="music-src-title px-2">
        {{ musicSrcTitle }}
      </div>
      @if (musicOn) {
        <audio autoplay loop [volume]="calcMusicVolume(musicVolume)">
          <source [src]="musicSrc" type="audio/mp3" />
        </audio>
      }

      <div class="px-2">Volume: {{ musicVolume }}%</div>
      <div>
        @if (musicVolume < 100) {
          <button type="button" (click)="increaseMusicVolume()" class="button">
            +
          </button>
        }
        @if (musicVolume == 100) {
          <button
            type="button"
            (click)="increaseMusicVolume()"
            disabled
            class="button"
          >
            +
          </button>
        }
        @if (musicVolume > 0) {
          <button type="button" (click)="decreaseMusicVolume()" class="button">
            -
          </button>
        }
        @if (musicVolume == 0) {
          <button
            type="button"
            (click)="decreaseMusicVolume()"
            disabled
            class="button"
          >
            -
          </button>
        }
      </div>

      <div>
        @if (musicOn) {
          <button type="button" (click)="toggleMusic()" class="button">
            Stop
          </button>
        }
        @if (!musicOn) {
          <button type="button" (click)="toggleMusic()" class="button">
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
