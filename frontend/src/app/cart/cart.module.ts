import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    FormsModule  
  ],
  exports: [CartComponent]
})
export class CartModule { }
