import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceGroupComponent } from './update-service-group.component';

describe('UpdateServiceGroupComponent', () => {
  let component: UpdateServiceGroupComponent;
  let fixture: ComponentFixture<UpdateServiceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServiceGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServiceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
