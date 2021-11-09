import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSellerGroupComponent } from './update-seller-group.component';

describe('UpdateSellerGroupComponent', () => {
  let component: UpdateSellerGroupComponent;
  let fixture: ComponentFixture<UpdateSellerGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSellerGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSellerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
