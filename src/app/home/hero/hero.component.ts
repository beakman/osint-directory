import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {map, Observable, of} from "rxjs";
import {Category} from "../../shared/models/category";
import {ApiService} from "../../shared/services/api.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  urlForm: FormGroup;
  $categories: Observable<Category[]> = of([]);

  constructor(private fb: FormBuilder, private api: ApiService) {
    const regex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.urlForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern(regex)]],
      category: this.fb.group({
        name: ['', Validators.required],
        slug: [''],
      }),
    });
  }

  ngOnInit(): void {
    const params = new HttpParams();
    this.$categories = this.api.getCategories(params).pipe(
      map(response => response.results)
    );
  }

  onSubmit() {
    const categoryName = this.urlForm.value.category.name.toLowerCase();
    this.urlForm.patchValue({
      slug: categoryName,
    });
    if (this.urlForm.valid) {
      this.api.sendSubmission(this.urlForm.value).subscribe();
    }
  }

  changeCategory(e: any) {
    console.log('Event', e);
  }

}
