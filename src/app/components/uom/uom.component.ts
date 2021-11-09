import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoutePathService } from 'src/app/services/route-path.service';
import { AddUomComponent } from 'src/app/dialogs/add-uom/add-uom.component';
import { UpdateUomComponent } from 'src/app/dialogs/update-uom/update-uom.component';

@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.css']
})
export class UomComponent implements OnInit {

  displayedColumns: string[] = ['position', 'currencyId', 'name','update','remove'];
  dataSource:any[] = [
    {position: 1, currencyId: 'C001', name: '1'},
    {position: 2, currencyId: 'C002', name: '2'},
    {position: 3, currencyId: 'C003', name: '3 '},
    {position: 4, currencyId: 'C004', name: '4'},
    {position: 5, currencyId: 'C005', name: '5'},
    {position: 6, currencyId: 'C006', name: '6 '},

  ];

  constructor(
    public dialog: MatDialog,
    private routePathService: RoutePathService
  ) {
    this.routePathService.routePath = "uom";
   }

  ngOnInit(): void {}

  openAddCurrencyDialog(){
    const dialogRef = this.dialog.open(AddUomComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateCurrencyDialog(){
    const dialogRef = this.dialog.open(UpdateUomComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
