import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog'
import { AddServiceComponent } from 'src/app/dialogs/add-service/add-service.component';
import { UpdateServiceComponent } from 'src/app/dialogs/update-service/update-service.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  displayedColumns: string[] = ['position', 'serviceId', 'name','category','group','remove'];
  dataSource:any[] = [
    {position: 1, serviceId: 'p001', name: 'laptop',category:"car",group:"Group 1"},
    {position: 1, serviceId: 'p002', name: 'laptop',category:"car",group:"Group 2"},
    {position: 1, serviceId: 'p003', name: 'laptop',category:"car",group:"Group 2"},
    {position: 1, serviceId: 'p004', name: 'laptop',category:"car",group:"Group 4"},
    {position: 1, serviceId: 'p005', name: 'laptop',category:"car",group:"Group 2"},
    {position: 1, serviceId: 'p006', name: 'laptop',category:"car",group:"Group 1"}
  ];

  constructor(
    public dialog: MatDialog,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "Service";
  }

  ngOnInit(): void {}
  openAddsacDialog(){
    const dialogRef = this.dialog.open(AddServiceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdatesacDialog(){
    const dialogRef = this.dialog.open(UpdateServiceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
