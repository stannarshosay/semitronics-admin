import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from 'src/app/dialogs/add-contact/add-contact.component';
import { RoutePathService } from 'src/app/services/route-path.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'contactId', 'name', 'number','location','address','category','group'];
  dataSource:any[] = [
    {position: 1, contactId: 'KL001', name: 'Kasaragod', number: 'KSGD',location:"India,Kerala,thrisshur",address:"jdks jasdhg kasjd",category:"Java",group:"Group 1"},
    {position: 1, contactId: 'KL001', name: 'Kasaragod', number: 'KSGD',location:"India,Kerala,thrisshur",address:"jdks jasdhg kasjd",category:"Java",group:"Group 1"},
    {position: 1, contactId: 'KL001', name: 'Kasaragod', number: 'KSGD',location:"India,Kerala,thrisshur",address:"jdks jasdhg kasjd",category:"Java",group:"Group 1"},
    {position: 1, contactId: 'KL001', name: 'Kasaragod', number: 'KSGD',location:"India,Kerala,thrisshur",address:"jdks jasdhg kasjd",category:"Java",group:"Group 1"},
    {position: 1, contactId: 'KL001', name: 'Kasaragod', number: 'KSGD',location:"India,Kerala,thrisshur",address:"jdks jasdhg kasjd",category:"Java",group:"Group 1"},
    {position: 1, contactId: 'KL001', name: 'Kasaragod', number: 'KSGD',location:"India,Kerala,thrisshur",address:"jdks jasdhg kasjd",category:"Java",group:"Group 1"}
  ];

  constructor(
    public dialog: MatDialog,
    private routePathService:RoutePathService
  ) { 
    this.routePathService.routePath = "Contacts";
  }

  ngOnInit(): void {}
  openAddContact(){
    const dialogRef = this.dialog.open(AddContactComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // openUpdateDistrictDialog(){
  //   const dialogRef = this.dialog.open(UpdateDistrictComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}
