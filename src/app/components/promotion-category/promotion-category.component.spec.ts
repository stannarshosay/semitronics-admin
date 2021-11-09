import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionCategoryComponent } from './promotion-category.component';

describe('PromotionCategoryComponent', () => {
  let component: PromotionCategoryComponent;
  let fixture: ComponentFixture<PromotionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
