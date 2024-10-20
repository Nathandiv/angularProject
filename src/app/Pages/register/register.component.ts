import { Component } from '@angular/core';
import { NavComponent } from '../../UI/Shared-UI/nav/nav.component';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
