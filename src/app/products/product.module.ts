import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

const featureModuleRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { 
    path: 'products/:id', 
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent 
  },
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
    
  ],
  imports: [
    RouterModule.forChild(featureModuleRoutes),
    SharedModule
  ]
})
export class ProductModule { }
