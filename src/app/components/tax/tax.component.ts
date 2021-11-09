import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaxComponent } from 'src/app/dialogs/add-tax/add-tax.component';
import { UpdateTaxComponent } from 'src/app/dialogs/update-tax/update-tax.component';
import { RoutePathService } from 'src/app/services/route-path.service';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  displayedColumns: string[] = ['position', 'taxId', 'name', 'oldtax','newtax','category','group','update','remove'];
  dataSource:any[] = [
    {position: 1, taxId: 'KL001', name: 'GST', oldtax: '11',newtax:"13",category:"Income",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'GST', oldtax: '11',newtax:"13",category:"Income",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'GST', oldtax: '11',newtax:"13",category:"Income",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'GST', oldtax: '11',newtax:"13",category:"Income",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'GST', oldtax: '11',newtax:"13",category:"Income",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'GST', oldtax: '11',newtax:"13",category:"Income",group:"Group 1"}
  ];

  constructor(
    public dialog: MatDialog,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "Contacts";
  }

  ngOnInit(): void {}
  openAddtaxDialog(){
    const dialogRef = this.dialog.open(AddTaxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdatetaxDialog(){
    const dialogRef = this.dialog.open(UpdateTaxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
