import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../Types/ UserInterface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isLoggedIn: boolean = false;
  user: UserInterface[] = [];
  router = inject(Router);

  constructor() {}

  // Register a new user
  register(userData: UserInterface) {
    const userEmail = userData.email;
    console.log(userData);

    // Check if the email is already registered
    for (let index = 0; index < this.user.length; index++) {
      if (this.user[index].email === userEmail) {
        alert('Email already taken');
        return;
      }
    }

    // If email is unique, add the user to the array and redirect to login
    this.user.push(userData);
    alert('Registered successfully');
    this.router.navigateByUrl('/login');
  }

  // Login an existing user
  login(userData: UserInterface) {
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email === userData.email && this.user[i].password === userData.password) {
        alert(`Welcome ${this.user[i].username}.`);
        this.authenticate(); // Set user as logged in
        this.router.navigateByUrl('/');
        return;
      }
    }
    alert('Incorrect login details');
  }

  // Set the user as authenticated
  private authenticate() {
    this.isLoggedIn = true;
  }

  // Logout the user
  logout() {
    this.isLoggedIn = false;
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
//   user: UserInterface[] = []
//   router = inject(Router)
//   private loggedIn: boolean = false;

//   constructor() { }
    
//   register(userData: UserInterface){
//     const userEmail = userData.email
//     console.log(userData);
//   for (let index = 0; index < this.user.length; index++) {
//     if(this.user[index].email == userEmail){
//       alert('email taken')
//     }
//   }
//   this.user.push(userData)
//   alert('registered')
//  this.router.navigateByUrl('/login')
// }

// login(userData: UserInterface){

// for (let i = 0; i < this.user.length; i++) {
//   if(this.user[i].email === userData.email && this.user[i].password === userData.password){
//     alert(`Welcome ${this.user[i].username} .`)
//     this.router.navigateByUrl('/')
//   }
//   else{
//     alert('wrong details')  
// }
// }

// }

// authenticate() {
//   this.loggedIn = true;
// }

// // Method to simulate logout
// logout() {
//   this.loggedIn = false;
// }

// // Check if the user is logged in
// isLoggedIn(): boolean {
//   return this.loggedIn;
// }
}
