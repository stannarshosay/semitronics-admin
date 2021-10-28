import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "Dashboard";
  }

  ngOnInit(): void {
  }

}
