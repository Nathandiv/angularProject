import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  // getButtons() {
  //   return [
  //     { label: 'Home', route: '/' },
  //     { label: 'Register', route: '/register' },
  //     { label: 'Status', route: '/status' },
  //     { label: 'Discover', route: '/opportunity' },
  //     { label: 'Blog', route: '/blog' },
  //     { label: 'About', route: '/about' },
  //     { label: 'Contact', route: '/contact' },
  //     { label: 'Login', route: '/login' }
  //   ];
  // }

  //   const currentRoute = this.router.url;
  //  /// Put all the routes that you want to show on the home below bra

  //   if (currentRoute === '/'){
  //    return [

  //     { label : 'Gogh', route: '/about'},
  //     {label:'nbjhbhb ', route: '/register'
  //        }
  //    ];
  //    } else if (currentRoute === '/login')
  //     return [

  //        { label : 'Go', route: '/about'},
  //     // {label:'Go to register', route: '/register'}
  //     {label : 'djhbn' ,  route: '/contact'}

  //     ];
  //         return []
  //   }
  // }
}
