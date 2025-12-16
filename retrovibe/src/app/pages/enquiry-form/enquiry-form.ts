import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormlyForm, FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@Component({
  selector: 'app-enquiry-form',
  imports: [ReactiveFormsModule, FormlyForm, FormlyMaterialModule],
  templateUrl: './enquiry-form.html',
  styleUrl: './enquiry-form.scss',
})
export class EnquiryForm {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'input',
      type: 'input',
      props: {
        label: 'Input',
        placeholder: 'Input placeholder',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'Input is required.',
        },
      },
    },
    {
      key: 'textarea',
      type: 'textarea',
      props: {
        label: 'Textarea',
        placeholder: 'Textarea placeholder',
        required: true,
      },
      validation: {
        messages: {
          required: () => 'I am a custom error msg.',
        },
      },
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      props: {
        label: 'Checkbox',
      },
    },
    {
      key: 'select',
      type: 'select',
      props: {
        label: 'Select',
        placeholder: 'Select placeholder',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ],
      },
    },
    {
      key: 'radio',
      type: 'radio',
      props: {
        label: 'Radio',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
