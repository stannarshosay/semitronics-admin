import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionGroupComponent } from './promotion-group.component';

describe('PromotionGroupComponent', () => {
  let component: PromotionGroupComponent;
  let fixture: ComponentFixture<PromotionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
