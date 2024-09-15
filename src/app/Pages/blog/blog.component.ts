import { Component } from '@angular/core';
import { NavComponent } from '../../UI/Shared-UI/nav/nav.component';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
