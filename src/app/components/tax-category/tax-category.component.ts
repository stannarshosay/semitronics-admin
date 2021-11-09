import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoutePathService } from 'src/app/services/route-path.service';
import { AddTaxCategoryComponent } from 'src/app/dialogs/add-tax-category/add-tax-category.component';
import { UpdateTaxCategoryComponent } from 'src/app/dialogs/update-tax-category/update-tax-category.component';

@Component({
  selector: 'app-tax-category',
  templateUrl: './tax-category.component.html',
  styleUrls: ['./tax-category.component.css']
})
export class TaxCategoryComponent implements OnInit {

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
    this.routePathService.routePath = " Tax Category";
   }

  ngOnInit(): void {}

  openAddCategoryDialog(){
    const dialogRef = this.dialog.open(AddTaxCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateCategoryDialog(){
    const dialogRef = this.dialog.open(UpdateTaxCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
