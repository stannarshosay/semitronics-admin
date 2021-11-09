import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromotionCategoryComponent } from './add-promotion-category.component';

describe('AddPromotionCategoryComponent', () => {
  let component: AddPromotionCategoryComponent;
  let fixture: ComponentFixture<AddPromotionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPromotionCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPromotionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
