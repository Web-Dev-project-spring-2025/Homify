import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthResData } from '../create-account/create-account.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateAccountComponent } from '../create-account/create-account.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  login(): void {
    if (this.loginForm.invalid) return;
  
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.closeDialog();
        this.router.navigate(['/profile']);
      },
      error: (errorRes) => {
        this.error = errorRes.error?.detail || 'Invalid email or password';
      }
    });
    this.loginForm.reset();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  openCreateAccount(): void {
    this.closeDialog();
    this.dialog.open(CreateAccountComponent, {
      width: '400px',
      disableClose: true
    });
  }
}














