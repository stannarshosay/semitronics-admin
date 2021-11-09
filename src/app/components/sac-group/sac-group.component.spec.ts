import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacGroupComponent } from './sac-group.component';

describe('SacGroupComponent', () => {
  let component: SacGroupComponent;
  let fixture: ComponentFixture<SacGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SacGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
