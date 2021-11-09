import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSacCategoryComponent } from './add-sac-category.component';

describe('AddSacCategoryComponent', () => {
  let component: AddSacCategoryComponent;
  let fixture: ComponentFixture<AddSacCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSacCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSacCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
