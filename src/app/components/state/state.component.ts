import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AddStateComponent } from 'src/app/dialogs/add-state/add-state.component';
import { UpdateStateComponent } from 'src/app/dialogs/update-state/update-state.component';
import { RoutePathService } from 'src/app/services/route-path.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  countryId:any = null;
  countryName:any = null;
  displayedColumns: string[] = ['position', 'stateId', 'name', 'code','update','remove','viewDistrict'];
  dataSource:any[] = [
    {position: 1, stateId: 'IND001', name: 'Kerala', code: 'KL'},
    {position: 2, stateId: 'IND002', name: 'Goa', code: 'GA'},
    {position: 3, stateId: 'IND003', name: 'Karnadaka ', code: 'KAR'},
    {position: 4, stateId: 'IND004', name: 'Tamil Nadu', code: 'TN'},
    {position: 5, stateId: 'IND005', name: 'Andhra pradesh', code: 'ANP'},
    {position: 6, stateId: 'IND006', name: 'Maharashtra ', code: 'MH'},
    {position: 7, stateId: 'IND007', name: 'Haryana', code: 'HR'} 
  ];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private routePathService:RoutePathService
  ) {
    this.routePathService.routePath = "State";
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.countryId = params.get('countryId');
      this.countryName = params.get('countryName');
    });
   }

  ngOnInit(): void {}

  openAddStateDialog(){
    const dialogRef = this.dialog.open(AddStateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateStateDialog(){
    const dialogRef = this.dialog.open(UpdateStateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
