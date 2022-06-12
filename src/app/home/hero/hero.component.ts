import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'category',
      type: 'select',
      templateOptions: {
        label: 'Category',
        placeholder: 'Select category',
        required: true,
      }
    },
    {
      key: 'url',
      type: 'input',
      templateOptions: {
        label: 'URL',
        placeholder: 'https://osint.directory',
        required: true,
      }
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }

}
