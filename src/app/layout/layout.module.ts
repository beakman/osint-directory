import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        LayoutComponent,
        NavbarComponent,
        FooterComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LayoutModule { }
