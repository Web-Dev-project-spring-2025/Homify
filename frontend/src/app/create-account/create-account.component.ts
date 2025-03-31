import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { AuthResData } from './create-account.model';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    HttpClientModule 
  ],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  signupForm!: FormGroup;
  error: string | null = null;
  success: string | null = null;

  constructor(
    private authService: AuthService, 
    public dialogRef: MatDialogRef<CreateAccountComponent>
  ) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, Validators.required)
    }, { validators: this.passwordCheck() });
  }

  passwordCheck(): ValidatorFn {
    return (control: AbstractControl) => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  createAccount(): void {
    if (this.signupForm.invalid) {
      return;
    }

    const signupData = {
      name: this.signupForm.get('name')?.value,
      username: this.signupForm.get('username')?.value,
      email: this.signupForm.get('email')?.value,
      password: this.signupForm.get('password')?.value
    };

    this.authService.signup(signupData).subscribe(
      (data: AuthResData) => {
        this.success = 'Signup successful!';
        this.error = null;
        
        setTimeout(() => this.dialogRef.close(), 2000); 
      },
      (errorRes) => {
        this.error = errorRes;
      }
    );
  }
}






















