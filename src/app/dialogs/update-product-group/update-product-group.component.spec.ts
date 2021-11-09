import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductGroupComponent } from './update-product-group.component';

describe('UpdateProductGroupComponent', () => {
  let component: UpdateProductGroupComponent;
  let fixture: ComponentFixture<UpdateProductGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
