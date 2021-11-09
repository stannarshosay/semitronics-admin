import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSellerCategoryComponent } from './add-seller-category.component';

describe('AddSellerCategoryComponent', () => {
  let component: AddSellerCategoryComponent;
  let fixture: ComponentFixture<AddSellerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSellerCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSellerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
