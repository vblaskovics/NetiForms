import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-validation',
  templateUrl: './form-reactive-validation.component.html',
  styleUrls: ['./form-reactive-validation.component.css'],
})
export class FormReactiveValidationComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      uid: ['', Validators.required],
    });
  }

  get uid(): FormControl {
    return this.myForm.get('uid') as FormControl;
  }

  ngOnInit(): void {}

  onSubmit(value: string): void {
    console.log('Submit:', value);
  }
}
