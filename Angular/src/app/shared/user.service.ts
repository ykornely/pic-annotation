import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

// this is injected in sign-up.component.ts. used in the constructor
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl+'/register' , user); // reach for the user.controller.js on server side, which is responsible to adding new user to the database. The used link is in environment.ts
  }

  login(authCredentials) { // with this function we make a login request into /authenticate URI into our node.js API and we'll send userCredentials (email and password). In return to this request we expect a JWT token. This function is used in sign-in.component.ts's onSubmit.
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
