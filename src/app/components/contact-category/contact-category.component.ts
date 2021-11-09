import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoutePathService } from 'src/app/services/route-path.service';
import { AddContactCategoryComponent } from 'src/app/dialogs/add-contact-category/add-contact-category.component';
import { UpdateContactCategoryComponent } from 'src/app/dialogs/update-contact-category/update-contact-category.component';

@Component({
  selector: 'app-contact-category',
  templateUrl: './contact-category.component.html',
  styleUrls: ['./contact-category.component.css']
})
export class ContactCategoryComponent implements OnInit {

  displayedColumns: string[] = ['position', 'contactId', 'name','update','remove'];
  dataSource:any[] = [
    {position: 1, contactId: 'C001', name: 'Group1'},
    {position: 2, contactId: 'C002', name: 'Group2'},
    {position: 3, contactId: 'C003', name: 'Group3'},
    {position: 4, contactId: 'C004', name: 'Group4', },
    {position: 5, contactId: 'C005', name: 'Group5'},
    {position: 6, contactId: 'C006', name: 'Group6'},
    {position: 7, contactId: 'C007', name: 'Group7'} 
  ];

  constructor(
    public dialog:MatDialog,
    private routePathService: RoutePathService
  ) {
    this.routePathService.routePath = " Contact Category";
   }

  ngOnInit(): void {}

  openAddContactCategoryDialog(){
    const dialogRef = this.dialog.open(AddContactCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateCategoryDialog(){
    const dialogRef = this.dialog.open(UpdateContactCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
