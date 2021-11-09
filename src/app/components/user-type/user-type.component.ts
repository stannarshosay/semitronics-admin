import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserTypesComponent } from 'src/app/dialogs/add-user-types/add-user-types.component';
import { UpdateUserTypesComponent } from 'src/app/dialogs/update-user-types/update-user-types.component';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'userId', 'userName','update','remove'];
  dataSource:any[] = [
    {position: 1, userId: 'C001', userName: 'Group 1'},
    {position: 2, userId: 'C002', userName: 'Group 2'},
    {position: 3, userId: 'C003', userName: 'Group 3 '},
    {position: 4, userId: 'C004', userName: 'Group 4'},
    {position: 5, userId: 'C005', userName: 'Group 5'},
    {position: 6, userId: 'C006', userName: 'Group 6'},
    {position: 7, userId: 'C007', userName: 'Group 7'} 
  ];

  constructor(
    public dialog:MatDialog,
    private routePathService: RoutePathService,
  ) {
    this.routePathService.routePath = "User Type";
   }

  ngOnInit(): void {}

  openAddUserDialog(){
    const dialogRef = this.dialog.open(AddUserTypesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateUserDialog(){
    const dialogRef = this.dialog.open(UpdateUserTypesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
