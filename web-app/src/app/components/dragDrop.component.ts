import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { Hero } from '../classes/hero';
import { HeroFactory } from '../data/heroes';

@Component({
  selector: 'dragdrop',
  template: `
    <div cdkDropListGroup>
      <div class="drag-drop-container text-white">
        <h2>Available Heroes</h2>

        <div
          cdkDropList
          [cdkDropListData]="heroNames"
          class="drag-drop-list drag-drop-list-top"
          cdkDropListSortingDisabled
          cdkDropListOrientation="mixed"
          (cdkDropListDropped)="drop($event)"
          cdkScrollable
        >
          @for (hero of heroNames; track hero) {
          <div class="drag-drop-box" cdkDrag>{{ hero }}</div>
          }
        </div>
      </div>

      <div class="drag-drop-container text-white">
        <h2>Party Members</h2>

        <div
          cdkDropList
          [cdkDropListData]="party"
          class="drag-drop-list drag-drop-list-bottom"
          (cdkDropListDropped)="drop($event)"
          cdkScrollable
        >
          @for (member of party; track member) {
          <div class="drag-drop-box" cdkDrag>{{ member }}</div>
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: 'dragDrop.component.css',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, CdkScrollable],
})
export class dragDropComponent implements OnInit {
  @Input({ required: true })
  heroes: Hero[] = [];

  heroNames: string[] = [];

  party = ['Makoto'];
  heroFactory = new HeroFactory();

  // add an output event so it can see whos ready to battle so main menu can display the details
  // add preview if you click and hold? not sure what I want to do there but the data for selected party member
  //    does need to get displayed either that way or off to the right maybe

  ngOnInit(): void {
    this.party = [];
    if (this.heroes == undefined || this.heroes.length == 0) {
      this.heroes = this.heroFactory.createHeroList();
    }
    this.heroNames = this.heroes.flatMap((hero: Hero) => hero.heroName);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
