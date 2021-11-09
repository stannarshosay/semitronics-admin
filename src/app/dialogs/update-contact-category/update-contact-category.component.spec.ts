import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactCategoryComponent } from './update-contact-category.component';

describe('UpdateContactCategoryComponent', () => {
  let component: UpdateContactCategoryComponent;
  let fixture: ComponentFixture<UpdateContactCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContactCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContactCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
