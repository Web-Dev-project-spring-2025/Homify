import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { signupModel, loginModel, User } from "../create-account/create-account.model";
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new BehaviorSubject<User | null>(null);

    constructor(private http: HttpClient, private router: Router) {}

    signup(account: signupModel) {
        return this.http.post<any>('http://localhost:8000/api/core/signup/', account)
            .pipe(
                catchError(this.handleError),
                tap(res => {
                    console.log(res);
                })
            );
    }

    login(account: loginModel) {
        return this.http.post<any>('http://localhost:8000/api/core/login/', account)
            .pipe(
                catchError(this.handleError),
                tap(res => {
                    // Assuming the response contains user data directly
                    this.fetchUserProfile(res.access); // You might want to remove the token as well, if not required
                })
            );
    }

    fetchUserProfile(token: string) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        this.http.get<any>('http://localhost:8000/api/core/users/me/', { headers }).subscribe(userData => {
            const user = new User(userData.id, userData.email, userData.username, userData.name, token);
            this.user.next(user);
            localStorage.setItem('user', JSON.stringify(user)); // Storing only the user data
        });
    }

    autologin() {
        const userDataString = localStorage.getItem('user');
        if (!userDataString) return;

        const userData = JSON.parse(userDataString);
        const loadedUser = new User(userData.id, userData.email, userData.username, userData.name, userData.token);
        this.user.next(loadedUser);
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error);
        let errormessage = 'An unknown error occurred';
        if (!error.error) return throwError(() => errormessage);
        if (error.error.non_field_errors) errormessage = error.error.non_field_errors[0];
        if (error.error.email) errormessage = error.error.email[0];
        if (error.error.username) errormessage = error.error.username[0];
        return throwError(() => errormessage);
    }

    logout() {
        this.user.next(null);
        localStorage.removeItem('user'); // Removed access and refresh tokens
        this.router.navigate(['/']);
    }
}




