import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSacGroupComponent } from './add-sac-group.component';

describe('AddSacGroupComponent', () => {
  let component: AddSacGroupComponent;
  let fixture: ComponentFixture<AddSacGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSacGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSacGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
