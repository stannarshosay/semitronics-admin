import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog';
import { AddServiceCategoryComponent } from 'src/app/dialogs/add-service-category/add-service-category.component';
import { UpdateServiceCategoryComponent } from 'src/app/dialogs/update-service-category/update-service-category.component';

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.css']
})
export class ServiceCategoryComponent implements OnInit {

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
    this.routePathService.routePath = " Service Category";
   }

  ngOnInit(): void {}

  openAddCategoryDialog(){
    const dialogRef = this.dialog.open(AddServiceCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateCategoryDialog(){
    const dialogRef = this.dialog.open(UpdateServiceCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
