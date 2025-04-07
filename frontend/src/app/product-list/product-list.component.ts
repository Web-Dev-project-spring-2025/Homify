import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterModule],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = [...this.products];

      this.route.paramMap.subscribe(params => {
        const category = params.get('category');
        if (category) {
          this.filterProducts(category);
        }
      });
    });
  }

  filterProducts(category: string) {
    const normalizedCategory = category.replace('-', ' ').trim().toLowerCase();

    this.filteredProducts = normalizedCategory === 'all'
      ? [...this.products]
      : this.products.filter(product => product.category.trim().toLowerCase() === normalizedCategory);

    console.log(`Фильтрация по: "${normalizedCategory}"`, this.filteredProducts);
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
