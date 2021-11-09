import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCategoryComponent } from './seller-category.component';

describe('SellerCategoryComponent', () => {
  let component: SellerCategoryComponent;
  let fixture: ComponentFixture<SellerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});