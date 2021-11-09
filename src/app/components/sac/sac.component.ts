import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog'
import { AddSacComponent } from 'src/app/dialogs/add-sac/add-sac.component';
import { UpdateSacComponent } from 'src/app/dialogs/update-sac/update-sac.component';

@Component({
  selector: 'app-sac',
  templateUrl: './sac.component.html',
  styleUrls: ['./sac.component.css']
})
export class SacComponent implements OnInit {
  displayedColumns: string[] = ['position', 'taxId', 'name','category','group','update','status','remove'];
  dataSource:any[] = [
    {position: 1, taxId: 'KL001', name: 'GST',category:"Income",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'GST',category:"Income",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'GST',category:"Income",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'GST',category:"Income",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'GST',category:"Income",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'GST',category:"Income",group:"Group 1"}
  ];

  constructor(
    public dialog: MatDialog,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "SAC";
  }

  ngOnInit(): void {}
  openAddsacDialog(){
    const dialogRef = this.dialog.open(AddSacComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdatesacDialog(){
    const dialogRef = this.dialog.open(UpdateSacComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
