import { Component, inject } from '@angular/core';
import { NavComponent } from '../../UI/Shared-UI/nav/nav.component';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-registerlogin',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterLink,RouterLinkActive],
  templateUrl: './registerlogin.component.html',
  styleUrl: './registerlogin.component.css'
})
export class RegisterloginComponent {

  authService = inject(AuthService)

  register(username: string, email: string, password: string){
  
    if(!username){
      alert('username needed')
      return
    }
  
    if(!email){
      alert('email needed')
      return
    }
    if(!password){
      alert('password needed')
      return
    }
    this.authService.register({username, email, password})
  
  }


}
