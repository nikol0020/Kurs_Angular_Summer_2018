import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { ButtonSimpleComponent } from './button-simple/button-simple.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, FilterComponent,
                SearchComponent, LogoComponent, BreadcrumbsComponent, ToolboxComponent,
                FooterComponent, ButtonSimpleComponent, ButtonSimpleComponent],
  exports: [HeaderComponent, FooterComponent, FilterComponent,
           SearchComponent, LogoComponent, BreadcrumbsComponent,ToolboxComponent, ButtonSimpleComponent]
})
export class SharedModule { }
