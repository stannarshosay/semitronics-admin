import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSacComponent } from './update-sac.component';

describe('UpdateSacComponent', () => {
  let component: UpdateSacComponent;
  let fixture: ComponentFixture<UpdateSacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
