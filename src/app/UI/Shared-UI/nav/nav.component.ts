import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  isLoggedIn = true;
  currentPath:string = this.route.snapshot.routeConfig?.path || ''

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.checkIfLoggedIn()); // ActivatedRouteSnapshot
  }

  menuItems: any[] = [
    {
      label: 'Home',
      href: '',
      
    },
    {
      label: '',
      href: '',
    },
    {
      label: '',
      href: '',
    },
  ];

  checkIfLoggedIn() {
    return localStorage.getItem('user') ? true : false
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
