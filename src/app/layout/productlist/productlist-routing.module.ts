import { GridviewComponent } from './gridview/gridview.component';
import { ListviewComponent } from './listview/listview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist.component';

const routes: Routes = [
  {
    path: '',
    component: ProductlistComponent,
    children: [
      {
        path: '',
        component: ListviewComponent
      },
      {
        path: 'grid',
        component: GridviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductlistRoutingModule { }
