import { Component, inject } from '@angular/core';
import { NavComponent } from '../../UI/Shared-UI/nav/nav.component';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavComponent,FooterComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService)
  email: any;
password: any;
username: any;


 
}
