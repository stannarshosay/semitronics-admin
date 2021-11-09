import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacCategoryComponent } from './sac-category.component';

describe('SacCategoryComponent', () => {
  let component: SacCategoryComponent;
  let fixture: ComponentFixture<SacCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SacCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
