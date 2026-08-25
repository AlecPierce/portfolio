import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroComponent } from './hero.component';
import { CarouselModule } from 'primeng/carousel';
import { Hero } from '../classes/hero';
import { HeroFactory } from '../data/heroes';

@Component({
  selector: 'carousel',
  template: `
    <p-carousel
      [value]="heroes"
      [numVisible]="6"
      [numScroll]="3"
      [circular]="false"
      [responsiveOptions]="responsiveOptions"
      id="p-carousel"
    >
      <ng-template let-hero #item>
        <hero
          [hero]="hero"
          [description]="hero.jobClass"
          (clicked)="heroClicked($event)"
        ></hero>
      </ng-template>
    </p-carousel>
  `,
  imports: [HeroComponent, CarouselModule],
  standalone: true,
})
export class CarouselComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  heroFactory = new HeroFactory();

  @Input({ required: true })
  heroes: Hero[] = [];
  addedHeroes: Hero[] = [];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    if (this.heroes == undefined || this.heroes.length == 0) {
      this.heroes = this.heroFactory.createHeroList();
    }

    this.createSwipeListener();
  }

  @Output() clicked = new EventEmitter<Hero>();

  heroClicked(hero: Hero) {
    this.clicked.emit(hero);
  }

  createSwipeListener() {
    const element = document.getElementById('p-carousel')!;

    let touchStartY = 0;
    let touchEndY = 0;

    // Minimum swipe distance in pixels to trigger the action
    const swipeThreshold = 50;

    element.addEventListener(
      'touchstart',
      (e) => {
        // Record the starting vertical position
        touchStartY = e.changedTouches[0].screenY;
      },
      { passive: true },
    );

    element.addEventListener(
      'touchend',
      (e) => {
        // Record the ending vertical position
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
      },
      { passive: true },
    );

    function handleSwipe() {
      const distanceY = touchEndY - touchStartY;

      // Check if the gesture moved far enough
      if (Math.abs(distanceY) > swipeThreshold) {
        if (distanceY < 0) {
          // swiped up
          window.scrollBy({ top: 500, behavior: 'smooth' });
        } else {
          // swiped down
          window.scrollTo({ top: 100, behavior: 'smooth' });
        }
      }
    }
  }
}
