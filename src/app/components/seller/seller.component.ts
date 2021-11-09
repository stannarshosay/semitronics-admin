import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog'
import { AddSellerComponent } from 'src/app/dialogs/add-seller/add-seller.component';
import { UpdateSellerComponent } from 'src/app/dialogs/update-seller/update-seller.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  displayedColumns: string[] = ['position', 'taxId', 'name','category','group','update','status','remove'];
  dataSource:any[] = [
    {position: 1, taxId: 'KL001', name: 'sample',category:"seller",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'sample',category:"seller",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'sample',category:"seller",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'sample',category:"seller",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'sample',category:"seller",group:"Group 1"},
    {position: 1, taxId: 'KL001', name: 'sample',category:"seller",group:"Group 1"}
  ];

  constructor(
    public dialog: MatDialog,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "SAC";
  }

  ngOnInit(): void {}
  openAddsacDialog(){
    const dialogRef = this.dialog.open(AddSellerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdatesacDialog(){
    const dialogRef = this.dialog.open(UpdateSellerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
