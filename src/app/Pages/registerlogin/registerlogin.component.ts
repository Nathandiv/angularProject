import { Component } from '@angular/core';
import { NavComponent } from '../../UI/Shared-UI/nav/nav.component';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registerlogin',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterLink],
  templateUrl: './registerlogin.component.html',
  styleUrl: './registerlogin.component.css'
})
export class RegisterloginComponent {

}
