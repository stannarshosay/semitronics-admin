import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AddDistrictComponent } from 'src/app/dialogs/add-district/add-district.component';
import { UpdateDistrictComponent } from 'src/app/dialogs/update-district/update-district.component';
import { RoutePathService } from 'src/app/services/route-path.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  stateId:any = null;
  stateName:any = null;
  countryName:any = null;
  displayedColumns: string[] = ['position', 'districtId', 'name', 'code','update','remove','viewpin'];
  dataSource:any[] = [
    {position: 1, districtId: 'KL001', name: 'Kasaragod', code: 'KSGD'},
    {position: 2, districtId: 'KL002', name: 'Kannur', code: 'KNR'},
    {position: 3, districtId: 'KL003', name: 'Kozhikode ', code: 'KZKD'},
    {position: 4, districtId: 'KL004', name: 'Malappuram', code: 'MLPM'},
    {position: 5, districtId: 'KL005', name: 'Palakkad', code: 'PLKD'},
    {position: 6, districtId: 'KL006', name: 'Thrissur ', code: 'TSR'},
    {position: 7, districtId: 'KL007', name: 'Kottayam', code: 'KTYM'} 
  ];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "District";
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.stateId = params.get('stateId');
      this.stateName = params.get('stateName');
      this.countryName = params.get('countryName');
    });
  }

  ngOnInit(): void {}
  openAddDistrictDialog(){
    const dialogRef = this.dialog.open(AddDistrictComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateDistrictDialog(){
    const dialogRef = this.dialog.open(UpdateDistrictComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
