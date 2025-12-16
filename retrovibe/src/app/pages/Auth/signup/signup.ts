import { Component } from '@angular/core';
import { fields } from '../Reusable/constant';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormlyForm, FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, FormlyForm, FormlyMaterialModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;

  onSubmit(model: any) {
    if (this.form.valid) {
      console.log('Form Submitted:', model);
    }
  }
}
