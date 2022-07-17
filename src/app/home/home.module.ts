import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SitesComponent } from './sites/sites.component';
import { SiteCardComponent } from './sites/site-card/site-card.component';
import { SiteCategoriesComponent } from './sites/site-categories/site-categories.component';
import { SiteCategoryComponent } from './sites/site-category/site-category.component';
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SitesComponent,
    SiteCardComponent,
    SiteCategoriesComponent,
    SiteCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormlyModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [RouterModule],
})
export class HomeModule {
}
