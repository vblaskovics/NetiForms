import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      uid: ['ABC123'],
      username: ['admin'],
    });
  }

  ngOnInit(): void {}

  onSubmit(value: string): void {
    console.log('uid:', value);
  }

  resetForm(): void {
    this.myForm.reset({
      uid: 'ABC123',
      username: 'admin',
    });
  }

  ereaseForm(): void {
    this.myForm.reset();
  }

  getValue(): void {
    console.log(this.myForm.get('uid')?.value);
  }

  setValue(): void {
    this.myForm.setValue({ uid: 'SETVALUE', username: 'setvalue' });
  }

  patchValue(): void {
    this.myForm.patchValue({ uid: 'PATCHVALUE' });
  }
}
