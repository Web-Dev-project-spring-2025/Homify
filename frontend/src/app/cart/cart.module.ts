import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { FormsModule } from '@angular/forms';  // Импортируем FormsMod

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    FormsModule  // Добавляем FormsModule сюда
  ],
  exports: [CartComponent]
})
export class CartModule { }
