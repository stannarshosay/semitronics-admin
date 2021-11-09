import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsnCategoryComponent } from './hsn-category.component';

describe('HsnCategoryComponent', () => {
  let component: HsnCategoryComponent;
  let fixture: ComponentFixture<HsnCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsnCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsnCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
