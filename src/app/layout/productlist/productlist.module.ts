import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistRoutingModule } from './productlist-routing.module';
import { ProductlistComponent } from './productlist.component';
import { ListviewComponent } from './listview/listview.component';
import { GridviewComponent } from './gridview/gridview.component';


@NgModule({
  declarations: [
    ProductlistComponent,
    ListviewComponent,
    GridviewComponent
  ],
  imports: [
    CommonModule,
    ProductlistRoutingModule
  ]
})
export class ProductlistModule { }
