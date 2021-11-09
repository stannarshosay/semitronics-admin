import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePromotionGroupComponent } from './update-promotion-group.component';

describe('UpdatePromotionGroupComponent', () => {
  let component: UpdatePromotionGroupComponent;
  let fixture: ComponentFixture<UpdatePromotionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePromotionGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePromotionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
