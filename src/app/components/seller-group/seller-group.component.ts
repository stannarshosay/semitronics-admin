import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSellerGroupComponent } from 'src/app/dialogs/add-seller-group/add-seller-group.component';
import { UpdateSellerGroupComponent } from 'src/app/dialogs/update-seller-group/update-seller-group.component';

@Component({
  selector: 'app-seller-group',
  templateUrl: './seller-group.component.html',
  styleUrls: ['./seller-group.component.css']
})
export class SellerGroupComponent implements OnInit {

  displayedColumns: string[] = ['position', 'groupId', 'groupName','update','remove','viewState'];
  dataSource:any[] = [
    {position: 1, groupId: 'C001', groupName: 'Group 1'},
    {position: 2, groupId: 'C002', groupName: 'Group 2'},
    {position: 3, groupId: 'C003', groupName: 'Group 3 '},
    {position: 4, groupId: 'C004', groupName: 'Group 4'},
    {position: 5, groupId: 'C005', groupName: 'Group 5'},
    {position: 6, groupId: 'C006', groupName: 'Group 6'},
    {position: 7, groupId: 'C007', groupName: 'Group 7'} 
  ];

  constructor(
    public dialog:MatDialog,
    private routePathService: RoutePathService,
  ) {
    this.routePathService.routePath = "SAC Group";
   }

  ngOnInit(): void {}

  openAddGroupDialog(){
    const dialogRef = this.dialog.open(AddSellerGroupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateGroupDialog(){
    const dialogRef = this.dialog.open(UpdateSellerGroupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
