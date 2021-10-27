import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { DomSanitizer } from '@angular/platform-browser';
import { AddCurrencyComponent } from 'src/app/dialogs/add-currency/add-currency.component';
import { UpdateCurrencyComponent } from 'src/app/dialogs/update-currency/update-currency.component';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
   
  displayedColumns: string[] = ['position', 'countryId', 'name', 'currency','update','remove'];
  dataSource:any[] = [
    {position: 1, countryId: 'C001', name: 'America', currency: '&#8377;'},
    {position: 2, countryId: 'C002', name: 'India', currency: '&#36;'},
    {position: 3, countryId: 'C003', name: 'Japan ', currency: ''},
    {position: 4, countryId: 'C004', name: 'Argentina', currency: 'rupa'},
    {position: 5, countryId: 'C005', name: 'China', currency: 'rupa'},
    {position: 6, countryId: 'C006', name: 'Pakistan ', currency: 'rupa'},
    {position: 7, countryId: 'C007', name: 'Germany', currency: 'rupa'} 
  ];

  constructor(
    public dialog: MatDialog,
    private sanitized: DomSanitizer
  ) { }
  
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
