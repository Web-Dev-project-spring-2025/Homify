import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Router, RouterModule } from '@angular/router';
import { HelpPopupComponent } from './help-popup/help-popup.component';
import { NgIf } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, ProductListComponent, MatDialogModule, NgIf]
})
export class AppComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  openLogin() {
    this.dialog.open(LoginComponent, {
      width: '400px'
    });
  }

  openHelp() {
    this.dialog.open(HelpPopupComponent, {
      width: '400px'
    });
  }

  searchProducts(event: any, searchQuery: string) {
    if (event.key === 'Enter' && searchQuery.trim()) {
      this.router.navigate(['/search', searchQuery]);
    }
  } 
  navigateHome(){
    this.router.navigate(['/']);
  }
}

