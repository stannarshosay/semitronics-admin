import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog'
import { AddProductComponent } from 'src/app/dialogs/add-product/add-product.component';
import { UpdateProductComponent } from 'src/app/dialogs/update-product/update-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['position', 'productId', 'name','category','group','update','remove'];
  dataSource:any[] = [
    {position: 1, productId: 'p001', name: 'laptop',category:"car",group:"Group 1"},
    {position: 1, productId: 'p002', name: 'laptop',category:"car",group:"Group 2"},
    {position: 1, productId: 'p003', name: 'laptop',category:"car",group:"Group 2"},
    {position: 1, productId: 'p004', name: 'laptop',category:"car",group:"Group 4"},
    {position: 1, productId: 'p005', name: 'laptop',category:"car",group:"Group 2"},
    {position: 1, productId: 'p006', name: 'laptop',category:"car",group:"Group 1"}
  ];

  constructor(
    public dialog: MatDialog,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "Product";
  }

  ngOnInit(): void {}
  openAddsacDialog(){
    const dialogRef = this.dialog.open(AddProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdatesacDialog(){
    const dialogRef = this.dialog.open(UpdateProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
