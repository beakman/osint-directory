import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {FormlyFieldInput} from "./shared/formly-field-input";
import {FormlyFieldSelect} from "./shared/formly-field-select";
import {FormlySelectModule} from "@ngx-formly/core/select";
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module')
      .then(m => m.ContactModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module')
      .then(m => m.AboutModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: false,
  anchorScrolling: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent,
    FormlyFieldInput,
    FormlyFieldSelect
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes, config),
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {name: 'input', component: FormlyFieldInput},
        {name: 'select', component: FormlyFieldSelect},
      ]
    }),
    FormlyBootstrapModule,
    FormlySelectModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
