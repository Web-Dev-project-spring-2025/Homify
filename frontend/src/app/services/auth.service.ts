import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { signupModel,AuthResData,loginModel,User } from "../create-account/create-account.model";
import { catchError,tap} from 'rxjs/operators';
import { BehaviorSubject, throwError } from "rxjs";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class AuthService{
    user = new BehaviorSubject<User| null>(null);
    constructor(private http: HttpClient,private router: Router){}

    signup(account: signupModel){
        return this.http.post<AuthResData>('http://localhost:8000/api/accounts/signup/',account)
        .pipe(catchError(this.handleError),tap((res)=>{
            console.log(res)
        }))
    }

    login(account: loginModel){
        return this.http.post<AuthResData>('http://localhost:8000/api/accounts/login/',account)
        .pipe(catchError(this.handleError),tap((res)=>{
            this.handleAuth(res);
        }))
    }
    

    autologin() {
        const userDataString = localStorage.getItem('user');
        if (!userDataString) {
            return;
        }
    
        const userData: AuthResData = JSON.parse(userDataString);
        const loadedUser = new User(userData.user_id, userData.email, userData.username, userData.name, userData.token);
        
        this.user.next(loadedUser);
    }
    

    private handleError(error: HttpErrorResponse){
        console.log(error)
        let errormessage = 'An unknown errror occured'
        if(!error.error){
            return throwError(errormessage)
        }
        if(error.error.non_field_errors){
            errormessage = error.error.non_field_errors[0]
        }
        if(error.error.email){
            errormessage = error.error.email[0]
        }
        if(error.error.username){
            errormessage = error.error.username[0]
        }
        return throwError(errormessage);
    }

    private handleAuth(res: AuthResData){
        const user = new User(res.user_id,res.email,res.username,res.name,res.token);
        this.user.next(user);
        localStorage.setItem('user',JSON.stringify(user))
    }
    logout(){
        this.user.next(null)
        localStorage.removeItem('user');
        this.router.navigate(['/'])
    }

    updateUser(updatedUser: { name: string; username: string; email: string }) {
        const token = localStorage.getItem('token'); 
      
        if (!token) {
          console.error('Ошибка: Токен отсутствует!');
          return throwError(() => new Error('Необходима авторизация'));
        }
      
        return this.http.patch('http://localhost:8000/api/accounts/update-profile/', updatedUser, {
          headers: new HttpHeaders({
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
          })
        });
      }
      
}

