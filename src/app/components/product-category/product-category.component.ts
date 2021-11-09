import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProductCategoryComponent } from 'src/app/dialogs/update-product-category/update-product-category.component';
import { AddProductCategoryComponent } from 'src/app/dialogs/add-product-category/add-product-category.component';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'productId', 'name','update','remove'];
  dataSource:any[] = [
    {position: 1, productId: 'C001', name: 'Group1'},
    {position: 2, productId: 'C002', name: 'Group2'},
    {position: 3, productId: 'C003', name: 'Group3'},
    {position: 4, productId: 'C004', name: 'Group4', },
    {position: 5, productId: 'C005', name: 'Group5'},
    {position: 6, productId: 'C006', name: 'Group6'},
    {position: 7, productId: 'C007', name: 'Group7'} 
  ];

  constructor(
    public dialog:MatDialog,
    private routePathService: RoutePathService
  ) {
    this.routePathService.routePath = " Product Category";
   }

  ngOnInit(): void {}

  openAddCategoryDialog(){
    const dialogRef = this.dialog.open(AddProductCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateCategoryDialog(){
    const dialogRef = this.dialog.open(UpdateProductCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
