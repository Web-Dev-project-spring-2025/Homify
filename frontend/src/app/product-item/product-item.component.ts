import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { Product } from '../models';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None
})

export class ProductItemComponent implements OnInit {
  /*product: Product | undefined;*/
  showShareOptions = false;
  @Input() product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(productId)) {
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
        console.log('Downloaded product:', this.product);
      });
    } else {
      console.error('Incorrect Product ID');
    }
  }

  get productUrl(): string {
    return this.product?.id ? `${window.location.origin}/product/${this.product.id}` : '';
  }
  toggleShareOptions(): void {
    this.showShareOptions = !this.showShareOptions;
  }
  addToCart(): void {
    const userData = localStorage.getItem('user');
    const token = userData ? JSON.parse(userData).token : null;

    if (!token) {
      alert('Please log in to your account to add items to your cart.');
      this.dialog.open(LoginComponent, {
        width: '400px',
        disableClose: true,
      });
      return;
    }

    this.cartService.addToCart(this.product.id).subscribe(
      () => {},
      err => {
        console.error('Error adding to cart:', err);
        alert('Failed to add product to cart.');
      }
    );
  }
  

  share(platform: 'telegram' | 'whatsapp' | 'facebook' | 'twitter' | 'email'): void {
    if (!this.product) return;

    const message = `Look, what a cool product: ${this.product.name}! Here the link: ${this.productUrl}`;
    let shareUrl = '';

    switch (platform) {
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(this.productUrl)}&text=${encodeURIComponent(message)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.productUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.productUrl)}&text=${encodeURIComponent(message)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=Look at this!&body=${encodeURIComponent(message)}`;
        break;
      default:
        console.error('Unknown platform:', platform);
        return;
    }

    window.open(shareUrl, '_blank');
  }


  copyLink(): void {
    navigator.clipboard.writeText(this.productUrl)
      .then(() => alert('Link is copied!'))
      .catch(err => console.error('Copy error:', err));
  }
  navToCart() {
    const user = localStorage.getItem('user');
    if (user) {
      this.router.navigate(['/cart']);
    } else {
      this.dialog.open(LoginComponent, {
        width: '400px',
        disableClose: true,
      });
    }
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
