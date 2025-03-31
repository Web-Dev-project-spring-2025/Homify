import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../models';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterModule],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = [...this.products]; 
  
      this.route.paramMap.subscribe(params => {
        const category = params.get('category');
        
        if (!category || category.toLowerCase() === 'all') {
          this.filteredProducts = [...this.products]; 
        } else {
          this.filterProducts(category);
        }
      });
    });
  }
  
  filterProducts(category: string) {
    const normalizedCategory = category.replace('-', ' ').trim().toLowerCase();
  
    if (normalizedCategory === 'all') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.category.trim().toLowerCase() === normalizedCategory
      );
    }
  }
  
  goToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }
  navToCart() {
    this.router.navigate(['/cart']); 
  }
  
  navToAccount() {
    this.router.navigate(['/profile']);
  }
}
