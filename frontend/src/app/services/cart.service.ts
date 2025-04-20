import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({ providedIn: 'root' })
export class CartService {
  private baseUrl = 'http://localhost:8000/api/cart/';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const userData = localStorage.getItem('user');
    const token = userData ? JSON.parse(userData).token : null;

    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,  
      'Content-Type': 'application/json',
    });
  }

  getCart(): Observable<any> {
    return this.http.get(this.baseUrl, { headers: this.getHeaders() });
  }

  addToCart(productId: number, quantity: number = 0): Observable<any> {
    return this.http.post(this.baseUrl, { product_id: productId, quantity }, { headers: this.getHeaders() });
  }

  removeFromCart(productId: number): Observable<any> {
    return this.http.delete(this.baseUrl + `?product_id=${productId}`, {
      headers: this.getHeaders()
    });
  }

  clearCart(): Observable<any> {
    return this.http.delete(this.baseUrl + 'clear/', { headers: this.getHeaders() });
  }
  increaseQuantity(productId: number): Observable<any> {
    return this.addToCart(productId, 1);
  }
  
  decreaseQuantity(productId: number): Observable<any> {
    return this.http.post(this.baseUrl + 'decrease/', { product_id: productId }, {
      headers: this.getHeaders()
    });
  }
  updateItemQuantity(productId: number, quantity: number): Observable<any> {
    return this.http.put(this.baseUrl + `update/${productId}`, { quantity }, {
      headers: this.getHeaders()
    });
  }


  


}




