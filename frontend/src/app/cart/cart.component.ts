import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../services/cart.service';
import { LoginComponent } from '../login/login.component'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule,   FormsModule,]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe(
      data => {
        this.cartItems = data.map((item: any) => {
          if (item.image && item.image.startsWith('/media/')) {
            item.image = 'http://localhost:8000' + item.image;
          }
          return item;
        });
      },
      error => {
        console.error('Error loading cart', error);
        if (error.status === 401) {
          this.dialog.open(LoginComponent, {
            width: '400px',
            disableClose: true,
          });
        }
      }
    );
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId).subscribe(
      () => {
        this.loadCart(); 
      },
      error => {
        console.error('Error removing item from cart', error);
      }
    );
  }

  clearCart() {
    this.cartService.clearCart().subscribe(
      () => {
        this.cartItems = []; 
      },
      error => {
        console.error('Error clearing cart', error);
      }
    );
  }

  navToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
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

  navToCart() {
    this.router.navigate(['/cart']);
  }

  increaseQuantity(productId: number) {
    this.cartService.addToCart(productId, 1).subscribe(
      () => this.loadCart(),
      error => console.error('Error increasing quantity', error)
    );
  }
  
  decreaseQuantity(productId: number) {
    this.cartService.decreaseQuantity(productId).subscribe(
      () => this.loadCart(),
      error => console.error('Error decreasing quantity', error)
    );
  }
  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  updateQuantity(productId: number) {
    const updatedItem = this.cartItems.find(item => item.id === productId);
    
    if (updatedItem && updatedItem.quantity > 0) {
      this.cartService.updateItemQuantity(productId, updatedItem.quantity).subscribe(
        (response) => {
          console.log('Item quantity updated', response);
          this.loadCart(); // Загружаем корзину после обновления
        },
        (error) => {
          console.error('Error updating item quantity', error);
        }
      );
    }
  }
  
  
}



