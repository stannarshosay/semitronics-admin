import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSellerCategoryComponent } from './update-seller-category.component';

describe('UpdateSellerCategoryComponent', () => {
  let component: UpdateSellerCategoryComponent;
  let fixture: ComponentFixture<UpdateSellerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSellerCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSellerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
