import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroComponent } from './hero.component';
import { CarouselModule } from 'primeng/carousel';
import { Hero } from '../classes/hero';
import { HeroFactory } from '../data/heroes';

@Component({
  selector: 'carousel',
  template: ` <p-carousel
    [value]="heroes"
    [numVisible]="6"
    [numScroll]="3"
    [circular]="false"
    [responsiveOptions]="responsiveOptions"
  >
    <ng-template let-hero #item>
      <hero
        [hero]="hero"
        [description]="hero.jobClass"
        (clicked)="heroClicked($event)"
      ></hero>
    </ng-template>
  </p-carousel>`,
  imports: [HeroComponent, CarouselModule],
  standalone: true,
})
export class CarouselComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  heroFactory = new HeroFactory();

  @Input({ required: true })
  heroes: Hero[] = [];

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
  }

  @Output() clicked = new EventEmitter<Hero>();

  heroClicked(hero: Hero) {
    this.clicked.emit(hero);
  }
}
