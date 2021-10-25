import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'address', 'mobile','status','remove'];
  dataSource:any[] = [
    {position: 1, name: 'Client 1', address: 'Lorem ipsum dolor sit amet', mobile: 987654321,status:true,remove:true},
    {position: 2, name: 'Client 2', address: 'Lorem ipsum dolor sit amet', mobile: 987654321,status:false,remove:true},
    {position: 3, name: 'Client 3', address: 'Lorem ipsum dolor sit amet', mobile: 987654321,status:true,remove:true},
    {position: 4, name: 'Client 4', address: 'Lorem ipsum dolor sit amet', mobile: 987654321,status:true,remove:true},
    {position: 5, name: 'Client 5', address: 'Lorem ipsum dolor sit amet', mobile: 987654321,status:true,remove:true},
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
