import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../models';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterModule],
})
export class ProductListComponent implements OnInit {
  products: Product[] = PRODUCTS; 
  filteredProducts: Product[] = [...this.products]; 

  constructor(private route: ActivatedRoute, private router: Router, private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryFromRoute = params.get('category');
      if (categoryFromRoute) {
        this.filterProducts(categoryFromRoute);
      } else {
        this.filteredProducts = [...this.products];
      }
      this.cdr.detectChanges(); 
    });
  }

  filterProducts(category: string) {
    const normalizedCategory = category.replace('-', ' ').trim().toLowerCase();
    console.log('Filtering by category:', normalizedCategory);
  
    this.filteredProducts = this.products.filter(
      product => product.category.trim().toLowerCase() === normalizedCategory
    );
  
    console.log('Filtered products:', this.filteredProducts);
  }
  
  

  goToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
