import { Component, Inject, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../classes/hero';
import { CommonModule } from '@angular/common';
import { StatsComponent } from '../components/stats.component';
@Component({
    selector: 'app-dialog-menu',
    templateUrl: './dialog-menu.component.html',
    imports: [CommonModule, StatsComponent, MatExpansionModule],
    styleUrls: ['./dialog-menu.component.scss']
})
export class DialogMenuComponent {
  readonly panelOpenState = signal(false);


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
        this.dialogRef.close({action: action, hero: this.data});
      }
    
      closeDialog(): void {
        this.dialogRef.close();
      }
}