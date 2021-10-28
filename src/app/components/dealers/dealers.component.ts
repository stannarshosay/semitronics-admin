import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';


@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'dealership', 'location','mobile','status','remove'];
  dataSource:any[] = [
    {position: 1, name: 'Ram', dealership: 'Ram Enterprises', location: 'kochi',mobile: 987654321,status:true,remove:true},
    {position: 2, name: 'John', dealership: 'John Exports', location: 'Calicut',mobile: 987654321,status:false,remove:true},
    {position: 3, name: 'Akhil', dealership: 'Akhil Enterprises', location: 'Thrissur',mobile: 987654321,status:true,remove:true},
    {position: 4, name: 'Viju', dealership: 'Viju & Co', location: 'Aluva',mobile: 987654321,status:true,remove:true},
    {position: 5, name: 'clara', dealership: 'Marymatha Enterprises', location: 'Thrissur',mobile: 987654321,status:true,remove:true},
   
  ];
  constructor(
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "Dealers";
  }

  ngOnInit(): void {
  }

}
