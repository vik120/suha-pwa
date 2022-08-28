import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./layout/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: 'productlist',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: 'wishlist', loadChildren: () => import('./layout/wishlist/wishlist.module').then(m => m.WishlistModule) },
  { path: 'product-detail', loadChildren: () => import('./layout/product-detail/product-detail.module').then(m => m.ProductDetailModule) },
  { path: 'productlist', loadChildren: () => import('./layout/productlist/productlist.module').then(m => m.ProductlistModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
