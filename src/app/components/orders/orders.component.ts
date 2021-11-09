import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoutePathService } from 'src/app/services/route-path.service';
import { AddOrdersComponent } from 'src/app/dialogs/add-orders/add-orders.component';
import { UpdateOrdersComponent } from 'src/app/dialogs/update-orders/update-orders.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'ordersId', 'name','update','remove'];
  dataSource:any[] = [
    {position: 1, ordersId: 'C001', name: '1'},
    {position: 2, ordersId: 'C002', name: '2'},
    {position: 3, ordersId: 'C003', name: '3 '},
    {position: 4, ordersId: 'C004', name: '4'},
    {position: 5, ordersId: 'C005', name: '5'},
    {position: 6, ordersId: 'C006', name: '6 '},

  ];

  constructor(
    public dialog: MatDialog,
    private routePathService: RoutePathService
  ) {
    this.routePathService.routePath = "Orders";
   }

  ngOnInit(): void {}

  openAddCurrencyDialog(){
    const dialogRef = this.dialog.open(AddOrdersComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateCurrencyDialog(){
    const dialogRef = this.dialog.open(UpdateOrdersComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
