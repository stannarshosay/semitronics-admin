import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSacCategoryComponent } from 'src/app/dialogs/add-sac-category/add-sac-category.component';
import { UpdateSacCategoryComponent } from 'src/app/dialogs/update-sac-category/update-sac-category.component';

@Component({
  selector: 'app-sac-category',
  templateUrl: './sac-category.component.html',
  styleUrls: ['./sac-category.component.css']
})
export class SacCategoryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'taxId', 'name','update','remove'];
  dataSource:any[] = [
    {position: 1, taxId: 'C001', name: 'Group1'},
    {position: 2, taxId: 'C002', name: 'Group2'},
    {position: 3, taxId: 'C003', name: 'Group3'},
    {position: 4, taxId: 'C004', name: 'Group4', },
    {position: 5, taxId: 'C005', name: 'Group5'},
    {position: 6, taxId: 'C006', name: 'Group6'},
    {position: 7, taxId: 'C007', name: 'Group7'} 
  ];

  constructor(
    public dialog:MatDialog,
    private routePathService: RoutePathService
  ) {
    this.routePathService.routePath = " SAC Category";
   }

  ngOnInit(): void {}

  openAddCategoryDialog(){
    const dialogRef = this.dialog.open(AddSacCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateCategoryDialog(){
    const dialogRef = this.dialog.open(UpdateSacCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
