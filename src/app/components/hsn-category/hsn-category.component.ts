import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddHsnCategoryComponent } from 'src/app/dialogs/add-hsn-category/add-hsn-category.component';
import { UpdateHsnCategoryComponent } from 'src/app/dialogs/update-hsn-category/update-hsn-category.component';
import { RoutePathService } from 'src/app/services/route-path.service';

@Component({
  selector: 'app-hsn-category',
  templateUrl: './hsn-category.component.html',
  styleUrls: ['./hsn-category.component.css']
})
export class HsnCategoryComponent implements OnInit {

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
    this.routePathService.routePath = " HSN Category";
   }

  ngOnInit(): void {}

  openAddCategoryDialog(){
    const dialogRef = this.dialog.open(AddHsnCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateCategoryDialog(){
    const dialogRef = this.dialog.open(UpdateHsnCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
