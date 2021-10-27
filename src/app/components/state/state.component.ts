import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AddStateComponent } from 'src/app/dialogs/add-state/add-state.component';
import { UpdateStateComponent } from 'src/app/dialogs/update-state/update-state.component';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  countryId:any = null;
  countryName:any = null;
  displayedColumns: string[] = ['position', 'stateId', 'name', 'code','update','remove'];
  dataSource:any[] = [
    {position: 1, stateId: 'C001', name: 'America', code: '+91'},
    {position: 2, stateId: 'C002', name: 'India', code: '+91'},
    {position: 3, stateId: 'C003', name: 'Japan ', code: '+91'},
    {position: 4, stateId: 'C004', name: 'Argentina', code: '+91'},
    {position: 5, stateId: 'C005', name: 'China', code: '+91'},
    {position: 6, stateId: 'C006', name: 'Pakistan ', code: '+91'},
    {position: 7, stateId: 'C007', name: 'Germany', code: '+91'} 
  ];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {
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
