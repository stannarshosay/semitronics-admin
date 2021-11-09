import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSellerGroupComponent } from './add-seller-group.component';

describe('AddSellerGroupComponent', () => {
  let component: AddSellerGroupComponent;
  let fixture: ComponentFixture<AddSellerGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSellerGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSellerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
