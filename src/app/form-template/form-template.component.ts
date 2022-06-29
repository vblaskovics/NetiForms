import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent implements OnInit {
  constructor() {
    // let nameControl = new FormControl("Nate");
    // console.log('value', nameControl.value);
    // console.log('errors', nameControl.errors);
    // console.log('dirty', nameControl.dirty);
    // console.log('valid', nameControl.valid);
    // let personInfo = new FormGroup({
    //   firstName: new FormControl('Peter'),
    //   lastName: new FormControl('Murray'),
    //   phone: new FormControl('222333444'),
    // });
    // console.log('personInfo:');
    // console.log('value', personInfo.value);
    // console.log('errors', personInfo.errors);
    // console.log('dirty', personInfo.dirty);
    // console.log('valid', personInfo.valid);
  }

  ngOnInit(): void {}

  onSubmit(formValue: any): void {
    console.log('form value:', formValue);
  }
}
