import { Component, OnInit } from '@angular/core';
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
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
    const registerForm = document.getElementById('register-form') as HTMLFormElement;
    registerForm.addEventListener('submit', (event: Event) => this.onFormSubmit(event));
  }

  showHome(): void {
    (document.getElementById('home-section') as HTMLElement).style.display = 'block';
    (document.getElementById('register-section') as HTMLElement).style.display = 'none';
  }

  showRegister(): void {
    (document.getElementById('home-section') as HTMLElement).style.display = 'none';
    (document.getElementById('register-section') as HTMLElement).style.display = 'block';
  }

  showUserFields(): void {
    const userType = (document.getElementById('user-type') as HTMLSelectElement).value;
    const schoolFields = document.getElementById('school-fields') as HTMLElement;
    const donorFields = document.getElementById('donor-fields') as HTMLElement;

    if (userType === 'school') {
      schoolFields.style.display = 'block';
      donorFields.style.display = 'none';
    } else if (userType === 'donor') {
      schoolFields.style.display = 'none';
      donorFields.style.display = 'block';
    } else {
      schoolFields.style.display = 'none';
      donorFields.style.display = 'none';
    }
  }

  onFormSubmit(event: Event): void {
    event.preventDefault();
    (document.getElementById('confirmation-message') as HTMLElement).style.display = 'block';
    (document.getElementById('register-form') as HTMLFormElement).style.display = 'none';
  }
}