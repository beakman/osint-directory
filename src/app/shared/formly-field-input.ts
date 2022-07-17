import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
 selector: 'formly-field-input',
 template: `
   <input type="input" [formControl]="formControl" [formlyAttributes]="field" required
          class="w-full rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder="https://noice-dir.com" value="">
 `,
})
export class FormlyFieldInput extends FieldType<FieldTypeConfig> {}
