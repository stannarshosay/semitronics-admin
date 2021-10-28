import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { DomSanitizer } from '@angular/platform-browser';
import { AddDistrictComponent } from 'src/app/dialogs/add-district/add-district.component';
import { UpdateDistrictComponent } from 'src/app/dialogs/update-district/update-district.component';
import { RoutePathService } from 'src/app/services/route-path.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  displayedColumns: string[] = ['position', 'districtId', 'name', 'code','update','remove'];
  dataSource:any[] = [
    {position: 1, districtId: 'KL001', name: 'Kasaragod', code: '&#8377;'},
    {position: 2, districtId: 'KL002', name: 'Kannur', code: '&#36;'},
    {position: 3, districtId: 'KL003', name: 'Kozhikode ', code: ''},
    {position: 4, districtId: 'KL004', name: 'Malappuram', code: 'rupa'},
    {position: 5, districtId: 'KL005', name: 'Palakkad', code: 'rupa'},
    {position: 6, districtId: 'KL006', name: 'Thrissur ', code: 'rupa'},
    {position: 7, districtId: 'KL007', name: 'Kottayam', code: 'rupa'} 
  ];

  constructor(
    public dialog: MatDialog,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "District";
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
