import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';



@NgModule({
  declarations: [
    CookiesPolicyComponent,
    LegalNoticeComponent,
    TermsOfServiceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LegalModule { }
