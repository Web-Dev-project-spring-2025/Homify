import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      console.log('Cart Items:', this.cartItems);
    });
  }

  
  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  navigateToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
  navToCart() {
    this.router.navigate(['/cart']); 
  }
  
  navToAccount() {
    this.router.navigate(['/profile']);
  }

}
