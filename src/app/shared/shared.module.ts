import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormlyModule} from "@ngx-formly/core";
import {ReactiveFormsModule} from "@angular/forms";
import { AlertComponent } from './alert/alert.component';
import {ApiService} from "./services/api.service";



@NgModule({
    declarations: [
        NotFoundComponent,
        AlertComponent,
    ],
    exports: [
        AlertComponent
    ],
    providers: [
      ApiService,
    ],
    imports: [
        CommonModule,
        FormlyModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
