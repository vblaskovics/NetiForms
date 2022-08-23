import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMultierrorComponent } from './form-multierror.component';

describe('FormMultierrorComponent', () => {
  let component: FormMultierrorComponent;
  let fixture: ComponentFixture<FormMultierrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMultierrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMultierrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
