import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSacCategoryComponent } from './update-sac-category.component';

describe('UpdateSacCategoryComponent', () => {
  let component: UpdateSacCategoryComponent;
  let fixture: ComponentFixture<UpdateSacCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSacCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSacCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
