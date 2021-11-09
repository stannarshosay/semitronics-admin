import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaxCategoryComponent } from './update-tax-category.component';

describe('UpdateTaxCategoryComponent', () => {
  let component: UpdateTaxCategoryComponent;
  let fixture: ComponentFixture<UpdateTaxCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTaxCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaxCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
