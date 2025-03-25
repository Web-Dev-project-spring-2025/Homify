import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../models';
import { PRODUCTS } from '../data/products';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], 
})
export class SearchComponent implements OnInit {
  products: Product[] = PRODUCTS;
  filteredProducts: Product[] = [...this.products];

  constructor(private route: ActivatedRoute, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const query = params.get('query') || '';
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      this.cdr.detectChanges();
    });
  }

  goToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}




