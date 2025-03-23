import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

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
  
}

