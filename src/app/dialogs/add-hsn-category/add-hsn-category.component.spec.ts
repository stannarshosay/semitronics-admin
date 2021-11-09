import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHsnCategoryComponent } from './add-hsn-category.component';

describe('AddHsnCategoryComponent', () => {
  let component: AddHsnCategoryComponent;
  let fixture: ComponentFixture<AddHsnCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHsnCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHsnCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
