import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../Types/ UserInterface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: UserInterface[] = []
  router = inject(Router)

  constructor() { }
    
  register(userData: UserInterface){
    const userEmail = userData.email
    console.log(userData);
  for (let index = 0; index < this.user.length; index++) {
    if(this.user[index].email == userEmail){
      alert('email taken')
    }
  }
  this.user.push(userData)
  alert('registered')
 this.router.navigateByUrl('/login')
}

login(userData: UserInterface){

for (let i = 0; i < this.user.length; i++) {
  if(this.user[i].email === userData.email && this.user[i].password === userData.password){
    alert(`Welcome ${this.user[i].username} .`)
    this.router.navigateByUrl('/')
  }
  else{
    alert('wrong details')  
}
}

}
}
