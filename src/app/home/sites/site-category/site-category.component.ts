import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-site-category',
  templateUrl: './site-category.component.html',
  styleUrls: ['./site-category.component.css']
})
export class SiteCategoryComponent implements OnInit {
  @Input() title = 'Category title';
  expanded = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }

}
