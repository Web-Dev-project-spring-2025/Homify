import { Component, Input, ViewEncapsulation, OnInit} from '@angular/core';
import { Product } from '../models';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../data/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None 
})

export class ProductItemComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(productId)) {
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
        console.log('Загруженный продукт:', this.product);
      });
    } else {
      console.error('Некорректный ID продукта');
    }
  }

  get productUrl(): string {
    return this.product ? `${window.location.origin}/product/${this.product.id}` : '';
  }

  share(platform: 'telegram' | 'whatsapp' | 'facebook' | 'twitter' | 'email'): void {
    if (!this.product) return;
  
    const message = `Смотри, какой классный товар: ${this.product.name}! Вот ссылка: ${this.productUrl}`;
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
        shareUrl = `mailto:?subject=Посмотри это!&body=${encodeURIComponent(message)}`;
        break;
      default:
        console.error('Неизвестная платформа:', platform);
        return;
    }
  
    window.open(shareUrl, '_blank');
  }
  

  copyLink(): void {
    navigator.clipboard.writeText(this.productUrl)
      .then(() => alert('Ссылка скопирована!'))
      .catch(err => console.error('Ошибка копирования:', err));
  }
  
  addToCart(product: Product) {
    console.log('Добавлено в корзину:', product);
  }
}
