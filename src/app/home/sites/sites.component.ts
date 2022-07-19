import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../shared/services/api.service";
import {Submission} from "../../shared/models/submission";
import {HttpParams} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {Category} from "../../shared/models/category";

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  $categories: Observable<Category[]> = of([]);

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    const params = new HttpParams();
    this.$categories = this.api.getCategories(params).pipe(
      map(response => response.results),
    );
    this.$categories.subscribe(res => {
      console.log('res', res);
    });
  }

}
