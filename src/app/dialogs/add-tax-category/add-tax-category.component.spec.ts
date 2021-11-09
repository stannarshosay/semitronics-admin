import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaxCategoryComponent } from './add-tax-category.component';

describe('AddTaxCategoryComponent', () => {
  let component: AddTaxCategoryComponent;
  let fixture: ComponentFixture<AddTaxCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaxCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaxCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
