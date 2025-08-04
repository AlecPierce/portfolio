import { Component, OnInit } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'dragdrop',
  template: `
    <div cdkDropListGroup>
        <div class="drag-drop-container text-white">
            <h2>Available Heroes</h2>

            <div
            cdkDropList
            [cdkDropListData]="heroes"
            class="drag-drop-list"
            cdkDropListSortingDisabled
            (cdkDropListDropped)="drop($event)"
            cdkScrollable>
            @for (hero of heroes; track hero) {
                <div class="drag-drop-box" cdkDrag>{{hero}}</div>
            }
            </div>
        </div>

        <div class="drag-drop-container text-white">
            <h2>Party Members</h2>

            <div
            cdkDropList
            [cdkDropListData]="party"
            class="drag-drop-list"
            (cdkDropListDropped)="drop($event)"
            cdkScrollable>
            @for (member of party; track member) {
                <div class="drag-drop-box" cdkDrag>{{member}}</div>
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
  heroes = ['Makoto', 'Yukari', 'Aigis', 'Fuuka', 'Mitsuru', 'Junpei', 'Ken', 'Koromaru'];

  party = ['Makoto'];

  // add an output event so it can see whos ready to battle so main menu can display the details
  // add preview if you click and hold? not sure what I want to do there but the data for selected party member
  //    does need to get displayed either that way or off to the right maybe

  ngOnInit(): void {
    this.party = [];
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
