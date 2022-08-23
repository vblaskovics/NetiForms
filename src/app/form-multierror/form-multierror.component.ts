import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

const ERROR_MSG: { [s: string]: any } = {
  required: (p: any) => 'This field is required',
  minlength: (p: any) => `Minimum ${p.requiredLength} characters are required.`,
  pattern: (p: any) => `Invalid format.`,
};

@Component({
  selector: 'app-form-multierror',
  templateUrl: './form-multierror.component.html',
  styleUrls: ['./form-multierror.component.css'],
})
export class FormMultierrorComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(/\d/)],
      ],
    });
  }

  ngOnInit(): void {}

  get username(): FormControl {
    return this.myForm.get('username') as FormControl;
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
    if (this.myForm.status === 'VALID') {
      console.log(this.myForm.value);
    } else {
      console.log('Invalid form');
    }
  }

  getErrorMessages(fc: FormControl): string[] {
    let messages = [];
    for (let errorName in fc.errors) {
      console.log(errorName);
      console.log(ERROR_MSG[errorName]);
      let errorParam = fc.errors[errorName];
      console.log('errorParam', errorParam);
      let errorMsg = ERROR_MSG[errorName](errorParam);
      messages.push(errorMsg);
    }
    return messages;
  }
}
