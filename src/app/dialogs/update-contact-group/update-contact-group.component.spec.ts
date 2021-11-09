import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactGroupComponent } from './update-contact-group.component';

describe('UpdateContactGroupComponent', () => {
  let component: UpdateContactGroupComponent;
  let fixture: ComponentFixture<UpdateContactGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContactGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContactGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
