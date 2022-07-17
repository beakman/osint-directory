import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  urlForm: FormGroup;
  categories = [
    'Tools',
    'Repository',
    'General',
  ];

  constructor(private fb: FormBuilder) {
    const regex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.urlForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern(regex)]],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submit!');
  }

  changeCategory(e: any) {
    console.log('Event', e);
  }

}
