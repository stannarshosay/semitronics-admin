import { Component, OnInit } from '@angular/core';
import { RoutePathService } from 'src/app/services/route-path.service';
import { MatDialog } from '@angular/material/dialog'
import { AddBrandComponent } from 'src/app/dialogs/add-brand/add-brand.component';
import { UpdateBrandComponent } from 'src/app/dialogs/update-brand/update-brand.component';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  displayedColumns: string[] = ['position', 'brandId', 'name','category','group','update','status','remove'];
  dataSource:any[] = [
    {position: 1, brandId: 'KL001', name: 'sample',category:"seller",group:"Group 1"},
    {position: 1, brandId: 'KL001', name: 'sample',category:"seller",group:"Group 1"},
    {position: 1, brandId: 'KL001', name: 'sample',category:"seller",group:"Group 1"},
    {position: 1, brandId: 'KL001', name: 'sample',category:"seller",group:"Group 1"},
    {position: 1, brandId: 'KL001', name: 'sample',category:"seller",group:"Group 1"},
    {position: 1, brandId: 'KL001', name: 'sample',category:"seller",group:"Group 1"}
  ];

  constructor(
    public dialog: MatDialog,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "Brand";
  }

  ngOnInit(): void {}
  openAddsacDialog(){
    const dialogRef = this.dialog.open(AddBrandComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdatesacDialog(){
    const dialogRef = this.dialog.open(UpdateBrandComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
