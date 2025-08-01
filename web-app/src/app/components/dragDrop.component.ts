import {Component, OnInit} from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CdkScrollable } from '@angular/cdk/scrolling';

/**
 * @title Drag&Drop disabled sorting
 */
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
  styleUrl: 'dragdrop.component.css',
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, CdkScrollable],
})
export class dragDropComponent implements OnInit {
  heroes = ['Makoto', 'Yukari', 'Aigis', 'Fuuka', 'Mitsuru', 'Junpei', 'Ken', 'Koromaru'];

  party = ['Makoto'];

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
