import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  data = inject(MAT_DIALOG_DATA);

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  login(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.dialogRef.close(); 
  }
}
