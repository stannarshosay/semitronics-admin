import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerGroupComponent } from './seller-group.component';

describe('SellerGroupComponent', () => {
  let component: SellerGroupComponent;
  let fixture: ComponentFixture<SellerGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
