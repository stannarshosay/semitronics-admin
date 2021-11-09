import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSacComponent } from './add-sac.component';

describe('AddSacComponent', () => {
  let component: AddSacComponent;
  let fixture: ComponentFixture<AddSacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
