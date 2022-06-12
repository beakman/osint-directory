import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsComponent } from './submissions.component';
import { SubmissionComponent } from './submission/submission.component';



@NgModule({
  declarations: [
    SubmissionsComponent,
    SubmissionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubmissionsModule { }
