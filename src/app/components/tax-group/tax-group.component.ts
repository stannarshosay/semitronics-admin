import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaxGroupComponent } from 'src/app/dialogs/add-tax-group/add-tax-group.component';
import { UpdateTaxGroupComponent } from 'src/app/dialogs/update-tax-group/update-tax-group.component';
import { RoutePathService } from 'src/app/services/route-path.service';

@Component({
  selector: 'app-tax-group',
  templateUrl: './tax-group.component.html',
  styleUrls: ['./tax-group.component.css']
})
export class TaxGroupComponent implements OnInit {

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
    this.routePathService.routePath = "Tax Group";
   }

  ngOnInit(): void {}

  openAddGroupDialog(){
    const dialogRef = this.dialog.open(AddTaxGroupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateGroupDialog(){
    const dialogRef = this.dialog.open(UpdateTaxGroupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
