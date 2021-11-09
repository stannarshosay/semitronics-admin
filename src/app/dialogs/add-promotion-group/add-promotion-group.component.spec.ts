import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromotionGroupComponent } from './add-promotion-group.component';

describe('AddPromotionGroupComponent', () => {
  let component: AddPromotionGroupComponent;
  let fixture: ComponentFixture<AddPromotionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPromotionGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPromotionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
