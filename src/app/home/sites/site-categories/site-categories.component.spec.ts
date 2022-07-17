import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCategoriesComponent } from './site-categories.component';

describe('SiteCategoriesComponent', () => {
  let component: SiteCategoriesComponent;
  let fixture: ComponentFixture<SiteCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
