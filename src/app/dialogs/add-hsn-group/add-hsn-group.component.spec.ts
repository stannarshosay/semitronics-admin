import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHsnGroupComponent } from './add-hsn-group.component';

describe('AddHsnGroupComponent', () => {
  let component: AddHsnGroupComponent;
  let fixture: ComponentFixture<AddHsnGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHsnGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHsnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
