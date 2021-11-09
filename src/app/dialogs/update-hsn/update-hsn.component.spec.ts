import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHsnComponent } from './update-hsn.component';

describe('UpdateHsnComponent', () => {
  let component: UpdateHsnComponent;
  let fixture: ComponentFixture<UpdateHsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
