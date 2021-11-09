import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaxGroupComponent } from './update-tax-group.component';

describe('UpdateTaxGroupComponent', () => {
  let component: UpdateTaxGroupComponent;
  let fixture: ComponentFixture<UpdateTaxGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTaxGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
