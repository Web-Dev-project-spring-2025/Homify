import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../create-account/create-account.model';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [FormsModule],
})
export class ProfileComponent implements OnInit, OnDestroy {
  user!: User;
  userSub!: Subscription;
  constructor(private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((data: User | null) => {
      if (data) {
        this.user = { ...data }; 
      }
    });
  }

  onSave() {
    this.authService.updateUser({
      name: this.user.name,
      username: this.user.username,
      email: this.user.email
    }).subscribe(
      (updatedUser) => {
        console.log('Профиль обновлен!', updatedUser);
        alert('Profile updated successfully!');
        this.authService.autologin(); 
      },
      (error) => {
        console.error('Ошибка при обновлении профиля:', error);
      }
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  navToCart() {
    this.router.navigate(['/cart']); 
  }
  
  onLogout(){
    this.authService.logout();
  }
}
