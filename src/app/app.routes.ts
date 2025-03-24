import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'category/:category', component: ProductListComponent },
  { path: 'product/:id', component: ProductItemComponent },
  { path: '', component: AppComponent, pathMatch: 'full' },
];

