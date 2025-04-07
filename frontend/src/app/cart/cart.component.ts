import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router,private dialog: MatDialog ) {
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
      const user = localStorage.getItem('user');
      if (user) {
        this.router.navigate(['/profile']);
      } else {
        this.dialog.open(LoginComponent, {
          width: '400px',
          disableClose: true,
        });
      }
    }

}

