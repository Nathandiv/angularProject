import { Component, inject } from '@angular/core';
import { NavComponent } from '../../UI/Shared-UI/nav/nav.component';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavComponent,FooterComponent, RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authService = inject(AuthService)

  login(email: string, password: string){
    if(!email){
      alert('need email')
      return
    }
    if(!password){
      alert('password needed')
      return
    }
    this.authService.login({email, password})
  }


 
}
