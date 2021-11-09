import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserTypesComponent } from './update-user-types.component';

describe('UpdateUserTypesComponent', () => {
  let component: UpdateUserTypesComponent;
  let fixture: ComponentFixture<UpdateUserTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
