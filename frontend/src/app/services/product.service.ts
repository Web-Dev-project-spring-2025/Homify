import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://127.0.0.1:8000/api/products/'; 

  constructor(private http: HttpClient) {}
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}productlist`).pipe(
      tap(products => console.log('Товары с API:', products))
    );
  }  

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}product/${id}/`).pipe(
      tap(product => console.log(`Продукт ${id}:`, product))
    );
  }
}
