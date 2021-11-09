import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrandGroupComponent } from './update-brand-group.component';

describe('UpdateBrandGroupComponent', () => {
  let component: UpdateBrandGroupComponent;
  let fixture: ComponentFixture<UpdateBrandGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBrandGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBrandGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
