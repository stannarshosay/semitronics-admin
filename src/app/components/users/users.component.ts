import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog'
import { AddUserComponent } from 'src/app/dialogs/add-user/add-user.component';
import { UpdateUserComponent } from 'src/app/dialogs/update-user/update-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'mobile', 'name','mail','update','status','remove'];
  dataSource:any[] = [
    {position: 1, mobile: '9495xxxx21', name: 'ram',mail:"smaple@gmail.com"},
    {position: 1, mobile: '9495xxxx21', name: 'john',mail:"smaple@gmail.com"},
    {position: 1, mobile: '9495xxxx21', name: 'mohan',mail:"smaple@gmail.com"},
    {position: 1, mobile: '9495xxxx21', name: 'lal',mail:"smaple@gmail.com"},
    {position: 1, mobile: '9495xxxx21', name: 'hari',mail:"smaple@gmail.com"},
    {position: 1, mobile: '9495xxxx21', name: 'lalu',mail:"smaple@gmail.com"}
  ];

  constructor(
    public dialog: MatDialog,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "User";
  }

  ngOnInit(): void {}
  openAddsacDialog(){
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdatesacDialog(){
    const dialogRef = this.dialog.open(UpdateUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
