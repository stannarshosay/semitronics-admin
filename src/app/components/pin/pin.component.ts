import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap  } from '@angular/router';
import { RoutePathService } from 'src/app/services/route-path.service';
import { AddPinComponent } from 'src/app/dialogs/add-pin/add-pin.component';
import { UpdatePinComponent } from 'src/app/dialogs/update-pin/update-pin.component';


@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {

  districtId:any = null;
  districtName:any = null;

  displayedColumns: string[] = ['position', 'location_name', 'pincode','update','remove'];
  dataSource:any[] = [
    {position: 1, location_name: 'Thrissur', pincode: '680001'},
    {position: 2, location_name: 'Ollur', pincode: '680304'},
    {position: 3, location_name: 'Kallur ', pincode: '680312'},
    {position: 4, location_name: 'Pudukad', pincode: '680301'},
    {position: 5, location_name: 'Nadikara', pincode: '680302'},
    {position: 6, location_name: 'Kodakara ', pincode: '680305'},
    {position: 7, location_name: 'Chalakudy', pincode: '680371'} 
  ];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private routePathService:RoutePathService
  ) {
    this.routePathService.routePath = "Pin";
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.districtId = params.get('districtId');
      this.districtName = params.get('districtName');
    });
   }

  ngOnInit(): void {}

  openAddPinDialog(){
    const dialogRef = this.dialog.open(AddPinComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdatePinDialog(){
    const dialogRef = this.dialog.open(UpdatePinComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
