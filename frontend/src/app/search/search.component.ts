import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../models';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], 
})
export class SearchComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cdr: ChangeDetectorRef, 
    private dialog: MatDialog
  ) {}
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.applyFilter();
      },
      error: (err) => console.error('Ошибка загрузки товаров:', err)
    });

    this.route.paramMap.subscribe(() => {
      this.applyFilter();
    });
  }
  applyFilter() {
    if (this.products.length === 0) return; 
    
    const query = this.route.snapshot.paramMap.get('query') || '';
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    this.cdr.detectChanges();
  }  
  goToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
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




