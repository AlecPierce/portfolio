import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../classes/hero';
import { CommonModule } from '@angular/common';
import { StatsComponent } from '../components/stats.component';
import { bounceInUpOnEnterAnimation, zoomOutRightAnimation } from 'angular-animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
    selector: 'app-dialog-menu',
    templateUrl: './dialog-menu.component.html',
    imports: [CommonModule, StatsComponent, BrowserAnimationsModule],
    animations: [zoomOutRightAnimation({ duration: 1000 }),
      bounceInUpOnEnterAnimation({ anchor: 'enter1' })
    ],
    styleUrls: ['./dialog-menu.component.scss']
})
export class DialogMenuComponent {
    animationState = false;
    animationWithState = false;
    hueBtnState = false;
    constructor(
        public dialogRef: MatDialogRef<DialogMenuComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Hero
      ) {}

      public alreadyInParty = this.data?.isInParty ? true : false;
      public hero = this.data;
    
      onAction(action: string): void {
        if (action === 'add') {
          this.data.isInParty = true;
        } else if (action === 'remove') {
          this.data.isInParty = false;
        }
        this.dialogRef.close();
      }
    
      closeDialog(): void {
        this.dialogRef.close();
      }
    
      animate() {
        this.animationState = false;
        setTimeout(() => {
          this.animationState = true;
          this.animationWithState = !this.animationWithState;
        }, 1);
      }
}