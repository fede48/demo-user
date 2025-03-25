import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.css'
})

export class UserDialogComponent 
{
    constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {}

    close(){
      this.dialogRef.close();
    }
}