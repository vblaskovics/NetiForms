import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveValidationComponent } from './form-reactive-validation.component';

describe('FormReactiveValidationComponent', () => {
  let component: FormReactiveValidationComponent;
  let fixture: ComponentFixture<FormReactiveValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReactiveValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
