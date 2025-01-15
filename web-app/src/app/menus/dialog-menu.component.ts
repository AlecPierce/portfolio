import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-menu',
    templateUrl: './dialog-menu.component.html',
    styleUrls: ['./dialog-menu.component.css']
})
export class DialogMenuComponent {

    constructor(@Inject(MatDialog) public dialog: MatDialog) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogContentComponent);

        dialogRef.afterClosed().subscribe((result: any) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}

@Component({
    selector: 'app-dialog-content',
    template: `
        <h1 mat-dialog-title>Dialog</h1>
        <div mat-dialog-actions>
            <button mat-button (click)="onNoClick()">No Thanks</button>
            <button mat-button (click)="navToBattle()">Battle</button>
        </div>
    `,
})
export class DialogContentComponent {
    dialogRef: any;
    router: any;

    constructor() {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    navToBattle(): void {
        this.dialogRef.close();
        this.router.navigate(['/battle']);
    }
}