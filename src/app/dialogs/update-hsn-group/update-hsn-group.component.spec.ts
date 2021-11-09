import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHsnGroupComponent } from './update-hsn-group.component';

describe('UpdateHsnGroupComponent', () => {
  let component: UpdateHsnGroupComponent;
  let fixture: ComponentFixture<UpdateHsnGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHsnGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHsnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
