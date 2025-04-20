import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; 
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartModule } from './cart/cart.module'; 

@NgModule({
    declarations: [
        ProductItemComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule, 
    FormsModule,
    CartModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


