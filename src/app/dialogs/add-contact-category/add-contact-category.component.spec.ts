import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactCategoryComponent } from './add-contact-category.component';

describe('AddContactCategoryComponent', () => {
  let component: AddContactCategoryComponent;
  let fixture: ComponentFixture<AddContactCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
