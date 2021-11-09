import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePromotionCategoryComponent } from './update-promotion-category.component';

describe('UpdatePromotionCategoryComponent', () => {
  let component: UpdatePromotionCategoryComponent;
  let fixture: ComponentFixture<UpdatePromotionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePromotionCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePromotionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
