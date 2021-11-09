import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUomComponent } from './update-uom.component';

describe('UpdateUomComponent', () => {
  let component: UpdateUomComponent;
  let fixture: ComponentFixture<UpdateUomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
