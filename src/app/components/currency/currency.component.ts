import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { AddCurrencyComponent } from 'src/app/dialogs/add-currency/add-currency.component';
import { UpdateCurrencyComponent } from 'src/app/dialogs/update-currency/update-currency.component';
import { RoutePathService } from 'src/app/services/route-path.service';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
   
  displayedColumns: string[] = ['position', 'currencyId', 'name', 'symbol','code','update','remove'];
  dataSource:any[] = [
    {position: 1, currencyId: 'C001', name: 'Ruppes', symbol: '&#8377;',code:"code1"},
    {position: 2, currencyId: 'C002', name: 'Yen', symbol: '&#36;',code:"code1"},
    {position: 3, currencyId: 'C003', name: 'Dollars ', symbol: '&#36;',code:"code1"},
    {position: 4, currencyId: 'C004', name: 'Euro', symbol: '&#36;',code:"code1"},
    {position: 5, currencyId: 'C005', name: 'Dollars', symbol: '&#36;',code:"code1"},
    {position: 6, currencyId: 'C006', name: 'Ruppes ', symbol: '&#36;',code:"code1"},
    {position: 7, currencyId: 'C007', name: 'Ruppes', symbol: '&#36;',code:"code1"} 
  ];

  constructor(
    public dialog: MatDialog,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "Currency";
  }
  
  ngOnInit(): void {}

  openAddCurrencyDialog(){
    const dialogRef = this.dialog.open(AddCurrencyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateCurrencyDialog(){
    const dialogRef = this.dialog.open(UpdateCurrencyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
