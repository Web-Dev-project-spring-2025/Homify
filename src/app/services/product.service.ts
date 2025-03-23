import { Injectable } from '@angular/core';
import { Product } from '../models'; 
import { PRODUCTS } from '../data/products'; 

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductById(id: number): Observable<Product | undefined> {
    console.log('Поиск продукта с ID:', id);
    const foundProduct = PRODUCTS.find(product => product.id === id);
    console.log('Найденный продукт:', foundProduct);
    return of(foundProduct);
  }  
}
