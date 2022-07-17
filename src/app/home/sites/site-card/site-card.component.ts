import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.css']
})
export class SiteCardComponent implements OnInit {
  @Input() title = 'Site title';
  @Input() description = 'Default description';
  @Input() author = 'Anon';
  @Input() url = 'https://osint.directory';
  @Input() score = 0;

  constructor() {}

  ngOnInit(): void {
  }

  upvote(): void {
    this.score += 1;
  }

  downvote(): void {
    this.score -= 1;
  }

  visit(url: string): void {
    // TODO: count visit
    window.open(url, '_blank');
  }

}
