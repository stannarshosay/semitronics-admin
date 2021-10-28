import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  displayedColumns: string[] = ['position', 'staffid', 'name', 'designation','status','remove'];
  dataSource:any[] = [
    {position: 1,  staffid: 'SJM00123', name: 'Ram S V', designation: 'Ass:Manager',status:true,remove:true},
    {position: 2, staffid: 'SJM00123', name: 'Mohan Kumar', designation: 'Ass:Manager',status:false,remove:true},
    {position: 3, staffid: 'SJM00154', name: 'John ', designation: 'Dep.Head',status:true,remove:true},
    {position: 4, staffid: 'SJM00186', name: 'Seshmi k', designation: 'HR',status:true,remove:true},
    {position: 5, staffid: 'SJM00147', name: 'Anil V', designation: 'Accountant',status:true,remove:true},
    {position: 6, staffid: 'SJM00104', name: 'Bindu Sunny ', designation: 'Office',status:true,remove:true},
    {position: 7, staffid: 'SJM00473', name: 'Seema baala', designation: 'office',status:true,remove:true},
    {position: 8, staffid: 'SJM00168', name: 'Arun', designation: 'Networking',status:true,remove:true} 
  ];

  constructor(
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "Staff";
  }

  ngOnInit(): void {
  }

}
