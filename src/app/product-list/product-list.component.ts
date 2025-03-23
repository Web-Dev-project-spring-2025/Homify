import { Component, Input } from '@angular/core';
import { Product } from '../models';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterModule],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() selectedCategory: string = '';

  get filteredProducts(): Product[] {
    return this.selectedCategory
      ? this.products.filter(p => p.category === this.selectedCategory)
      : this.products;
  }

  constructor(private router: Router) {}

  goToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
