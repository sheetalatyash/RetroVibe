import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup, Validators } from '@angular/forms';

export function MustMatchValidator(control: FormGroup) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { mustMatch: true };
}

export const fields: FormlyFieldConfig[] = [
  // First Name
  {
    key: 'firstName',
    type: 'input',
    props: {
      label: 'First Name',
      placeholder: 'Enter your first name',
      required: true,
      minLength: 2,
    },
    validation: {
      messages: {
        required: () => 'First name is required.',
        minLength: () => 'First name must be at least 2 characters.',
      },
    },
  },
  // Last Name
  {
    key: 'lastName',
    type: 'input',
    props: {
      label: 'Last Name',
      placeholder: 'Enter your last name',
      required: true,
      minLength: 2,
    },
    validation: {
      messages: {
        required: () => 'Last name is required.',
        minLength: () => 'Last name must be at least 2 characters.',
      },
    },
  },
  // Email
  {
    key: 'email',
    type: 'input',
    props: {
      label: 'Email address',
      placeholder: 'Enter your email address',
      required: true,
      type: 'email',
    },
    // Use Angular built-in Validators directly via `validators` property
    validators: {
      validation: [Validators.email],
    },
    validation: {
      messages: {
        required: () => 'Email address is required.',
        email: () => 'Please enter a valid email address.',
      },
    },
  },
  {
    key: 'phone',
    type: 'input',
    props: {
      label: 'Phone Number',
      placeholder: 'e.g., 123-456-7890',
      required: true,
      pattern: '^[0-9]{3}-[0-9]{3}-[0-9]{4}$',
    },
    validation: {
      messages: {
        pattern: () => 'Please use the format 123-456-7890.',
      },
    },
  },
  {
    key: 'birthdate',
    type: 'input',
    props: {
      label: 'Birthdate',
      type: 'date',
      required: true,
    },
  },
  {
    key: 'passwords',
    // The cross-field validator lives here at the group level:
    validators: {
      validation: [MustMatchValidator],
    },
    fieldGroup: [
      {
        key: 'password',
        type: 'input',
        props: {
          label: 'Password',
          placeholder: 'Enter your password',
          required: true,
          type: 'password',
          minLength: 6,
        },
        validation: {
          messages: {
            required: () => 'Password is required.',
            minLength: () => 'Password must be at least 6 characters.',
          },
        },
      },
      {
        key: 'confirmPassword',
        type: 'input',
        props: {
          label: 'Confirm Password',
          placeholder: 'Confirm your password',
          required: true,
          type: 'password',
        },
        validation: {
          messages: {
            required: () => 'Password confirmation is required.',
            mustMatch: () => 'Passwords do not match.', // This links to the group error key
          },
        },
        // The type assertion helps with your specific TypeScript error
      } as FormlyFieldConfig,
    ],
  },
];
