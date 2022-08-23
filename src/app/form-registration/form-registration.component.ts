import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function createRegexValidator(
  regexp: any,
  error: string
): (control: FormControl) => { [s: string]: boolean } {
  const regexpTester = new RegExp(regexp);
  return (control: FormControl) => {
    if (!regexpTester.test(control.value)) {
      return { [error]: true };
    }
    return {};
  };
}

function birthdateValidator(control: FormControl): { [s: string]: boolean } {
  if (new Date(control.value).getTime() >= Date.now()) {
    return { invalidDate: true };
  }
  return {};
}

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.css'],
})
export class FormRegistrationComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      firstname: ['', createRegexValidator(/^[A-Z]/, 'invalidName')],
      lastname: ['', createRegexValidator(/^[A-Z]/, 'invalidName')],
      birthdate: ['', birthdateValidator],
      email: [
        '',
        createRegexValidator(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'invalidEmail'
        ),
      ],
      password: [
        '',
        [
          Validators.required,
          // createRegexValidator(/\d/, 'noNumberInPassword'),
          // createRegexValidator(/.{8,}/, 'minLengthPassword'),
        ],
      ],
      passwordre: [
        '',
        [
          Validators.required,
          // createRegexValidator(/\d/, 'noNumberInPassword'),
          // createRegexValidator(/.{8,}/, 'minLengthPassword'),
        ],
      ],
      terms: [null, Validators.required],
    });

    this.myForm.valueChanges.subscribe(() => {
      this.validatePasswords();
    });
  }

  validatePasswords() {
    let password = this.myForm.get('password') as FormControl;
    let passwordre = this.myForm.get('passwordre') as FormControl;
    if (password.value !== passwordre.value) {
      passwordre.setErrors({'invalidPassword':true})
    } else {
      passwordre.setErrors(null);
    }
  }

  ngOnInit(): void {}

  onSubmit(value: string): void {
    console.log('Submitted:', value);
    debugger
    this.myForm.updateValueAndValidity();
  }

  getControl(controlName: string): FormControl {
    return this.myForm.get(controlName) as FormControl;
  }
}
