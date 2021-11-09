import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandGroupComponent } from './brand-group.component';

describe('BrandGroupComponent', () => {
  let component: BrandGroupComponent;
  let fixture: ComponentFixture<BrandGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
