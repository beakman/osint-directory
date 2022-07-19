import {Component, Input, OnInit} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {Category} from "../../../shared/models/category";
import {map, Observable, of} from "rxjs";
import {Submission} from "../../../shared/models/submission";
import {ApiService} from "../../../shared/services/api.service";

@Component({
  selector: 'app-site-category',
  templateUrl: './site-category.component.html',
  styleUrls: ['./site-category.component.css']
})
export class SiteCategoryComponent implements OnInit {
  @Input() category: Category = {
    id: 0,
    name: '',
    description: '',
    slug: ''
  };
  $sites: Observable<Submission[]> = of([]);
  expanded = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.expanded = !this.expanded;
    if (this.expanded) {
      const params = new HttpParams().set('category', this.category.id);
      this.$sites = this.api.getSubmissions(params).pipe(
        map(response => response.results)
      );
    }
  }

}
