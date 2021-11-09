import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSacGroupComponent } from './update-sac-group.component';

describe('UpdateSacGroupComponent', () => {
  let component: UpdateSacGroupComponent;
  let fixture: ComponentFixture<UpdateSacGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSacGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSacGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
