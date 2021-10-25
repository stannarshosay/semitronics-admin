import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCountryComponent } from 'src/app/dialogs/add-country/add-country.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'countryId', 'name', 'code','update','remove'];
  dataSource:any[] = [
    {position: 1, countryId: 'C001', name: 'America', code: '+91'},
    {position: 2, countryId: 'C002', name: 'India', code: '+91'},
    {position: 3, countryId: 'C003', name: 'Japan ', code: '+91'},
    {position: 4, countryId: 'C004', name: 'Argentina', code: '+91'},
    {position: 5, countryId: 'C005', name: 'China', code: '+91'},
    {position: 6, countryId: 'C006', name: 'Pakistan ', code: '+91'},
    {position: 7, countryId: 'C007', name: 'Germany', code: '+91'} 
  ];
  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  openAddCountryDialog(){
    const dialogRef = this.dialog.open(AddCountryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
