import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'scratch-off',
  imports: [],
  templateUrl: './scratch-off.component.html',
  styleUrl: './scratch-off.component.css',
})
export class ScratchOffComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.startListeningForScratch();
  }

  private startListeningForScratch() {
    const cursor = document.querySelector<HTMLElement>('.cursor');
    const scratchOffContainer = document.querySelector<HTMLElement>(
      '.scratch-off-container',
    );
    const scratchOffCover =
      document.querySelectorAll<HTMLElement>('.scratch-off-cover');
    const scratchOffReveal = document.querySelector<HTMLElement>(
      '.scratch-off-reveal',
    );

    this.createDust(
      cursor,
      scratchOffContainer,
      scratchOffCover,
      scratchOffReveal,
    );
  }

  private createDust(
    cursor: HTMLElement | null,
    scratchOffContainer: HTMLElement | null,
    scratchOffCover: NodeListOf<HTMLElement>,
    scratchOffReveal: HTMLElement | null,
  ) {
    if (cursor && scratchOffContainer && scratchOffCover && scratchOffReveal) {
      cursor.style.display = 'block'; // Ensure the cursor is visible
      scratchOffContainer.addEventListener('mouseenter', (e) => {
        scratchOffContainer.addEventListener('mousemove', (e) => {
          let x = e.clientX;
          let y = e.clientY;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
        });
        let xcounter = 0;
        let ycounter = 0;
        scratchOffCover.forEach((cover) => {
          cover.addEventListener('mousemove', (e) => {
            let x = e.clientX;
            let y = e.clientY;
            if (xcounter == 0) {
              x =
                (scratchOffReveal.clientWidth / window.innerWidth) * 0.6 +
                xcounter;
            } else {
              x = (e.clientX / window.innerWidth) * 0.6 + xcounter;
            }

            if (ycounter == 0) {
              y =
                (scratchOffReveal.clientWidth / window.innerWidth) * 0.6 +
                ycounter;
            } else {
              y = (e.clientY / window.innerWidth) * 0.6 + ycounter;
            }

            cover.style.setProperty('--x', `${x}%`);
            cover.style.setProperty('--y', `${y}%`);
            cover.style.setProperty(
              'clip-path',
              `circle(50px at var(--x) var(--y))`,
            );

            cover.style.setProperty('transition', 'clip-path 0.5s ease-out');
            xcounter += 5;
            if (xcounter % 10 === 0) {
              ycounter += 5;
            }
            if (xcounter > 100) {
              xcounter = 0;
            }
            if (ycounter > 100) {
              ycounter = 0;
            }
          });
        });
      });
    }
  }
}
