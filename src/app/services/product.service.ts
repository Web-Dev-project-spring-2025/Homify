import { Injectable } from '@angular/core';
import { Product } from '../models'; 
import { PRODUCTS } from '../data/products'; 

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductById(id: number): Observable<Product | undefined> {
    console.log('Search for a product with an ID:', id);
    const foundProduct = PRODUCTS.find(product => product.id === id);
    console.log('The found product:', foundProduct);
    return of(foundProduct);
  }  

  getProductImages(id: number): Observable<string[]> {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return of([]); 
    
    const images = [product.image, ...(product.images?.slice(0, 3) || [])];
    return of(images);
  }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }
}
