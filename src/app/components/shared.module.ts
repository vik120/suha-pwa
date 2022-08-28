import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoaderComponent } from './loader/loader.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule
  ],
  declarations: [
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent,
    CardComponent
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent,
    CarouselModule,
    CardComponent
  ]
})
export class SharedModule { }
