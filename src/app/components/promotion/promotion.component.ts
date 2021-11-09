import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPromotionComponent } from 'src/app/dialogs/add-promotion/add-promotion.component';
import { UpdatePromotionComponent } from 'src/app/dialogs/update-promotion/update-promotion.component';
import { RoutePathService } from 'src/app/services/route-path.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  displayedColumns: string[] = ['position', 'promotionId', 'name', 'category','group','update','remove'];
  dataSource:any[] = [
    {position: 1, promotionId: 'P1', name: 'promotion',category:"Income",group:"Group 1"},
    {position: 2, promotionId: 'P2', name: 'promotion',category:"Income",group:"Group 1"},
    {position: 3, promotionId: 'P3', name: 'promotion',category:"Income",group:"Group 1"},
    {position: 4, promotionId: 'P4', name: 'promotion',category:"Income",group:"Group 1"},
    {position: 5, promotionId: 'P5', name: 'promotion',category:"Income",group:"Group 1"},
    {position: 6, promotionId: 'P6', name: 'promotion',category:"Income",group:"Group 1"}
  ];

  constructor(
    public dialog: MatDialog,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "Promotions";
  }

  ngOnInit(): void {}
  openpromotionDialog(){
    const dialogRef = this.dialog.open(AddPromotionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdatepromotionDialog(){
    const dialogRef = this.dialog.open(UpdatePromotionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
