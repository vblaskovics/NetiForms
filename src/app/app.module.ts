import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormTemplate2Component } from './form-template2/form-template2.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormReactiveValidationComponent } from './form-reactive-validation/form-reactive-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormTemplate2Component,
    FormReactiveComponent,
    FormReactiveValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
