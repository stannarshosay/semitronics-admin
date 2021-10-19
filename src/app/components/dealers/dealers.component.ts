import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','status','remove'];
  dataSource:any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:true,remove:true},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',status:false,remove:true},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',status:true,remove:true},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',status:true,remove:true},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',status:true,remove:true},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',status:false,remove:true},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',status:false,remove:true},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',status:true,remove:true},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',status:true,remove:true},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',status:true,remove:true},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
