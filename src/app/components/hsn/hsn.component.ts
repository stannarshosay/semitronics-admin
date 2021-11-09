import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog';
import { AddHsnComponent } from 'src/app/dialogs/add-hsn/add-hsn.component';
import { UpdateHsnComponent } from 'src/app/dialogs/update-hsn/update-hsn.component';

@Component({
  selector: 'app-hsn',
  templateUrl: './hsn.component.html',
  styleUrls: ['./hsn.component.css']
})
export class HsnComponent implements OnInit {
  displayedColumns: string[] = ['position', 'taxId', 'name','category','group','update','remove'];
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
    this.routePathService.routePath = "HSN";
  }

  ngOnInit(): void {}
  openAddhsnDialog(){
    const dialogRef = this.dialog.open(AddHsnComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdatehsnDialog(){
    const dialogRef = this.dialog.open(UpdateHsnComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
