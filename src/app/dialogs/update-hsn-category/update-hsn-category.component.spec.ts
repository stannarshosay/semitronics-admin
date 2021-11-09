import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHsnCategoryComponent } from './update-hsn-category.component';

describe('UpdateHsnCategoryComponent', () => {
  let component: UpdateHsnCategoryComponent;
  let fixture: ComponentFixture<UpdateHsnCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHsnCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHsnCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
