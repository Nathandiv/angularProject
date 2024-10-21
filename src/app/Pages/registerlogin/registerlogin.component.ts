import { Component, inject } from '@angular/core';
import { NavComponent } from '../../UI/Shared-UI/nav/nav.component';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-registerlogin',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterLink],
  templateUrl: './registerlogin.component.html',
  styleUrl: './registerlogin.component.css'
})
export class RegisterloginComponent {

  authService = inject(AuthService)



  onRegister(username: string, email: string, password: string) {

    if (!username) {
      alert("Username is required")
      return;
    }

    if (!email) {
      alert("Email is required")
      return;
    }

    if (!password) {
      alert("Password is required")
      return;
    }

    // this.authService.onRegister({username, email, password})
  }


}
