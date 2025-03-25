import { Component } from '@angular/core';
import { UserService } from '../microservices/UserService';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-users';
  displayedColumns: string[] = ['avatar', 'first_name', 'last_name', 'email'];
  dataSource: any[] = [];
  selectedUser: any = null;

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.dataSource = response.data;
    });
  }

  onRowClicked(row: any): void {
    this.userService.getUserDetails(row.id).subscribe(response => {
      this.dialog.open(UserDialogComponent, {
        data: response.data,
        width: '400px'
      });
    });
  }
  
}

