import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'category/:category', component: ProductListComponent },
  { path: 'product/:id', component: ProductItemComponent },
  { path: 'search/:query', component: SearchComponent},
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent},
  { path:'login', component:LoginComponent},
  { path: '', component: AppComponent, pathMatch: 'full' },
];
