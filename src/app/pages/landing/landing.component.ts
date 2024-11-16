import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  constructor(private router: Router) {}

  navigateToSignIn() {
    this.router.navigate(['/sign_in']);
  }

  navigateToSignUp() {
    this.router.navigate(['/sign_up']);
  }

  shortenLink() {
    console.log('Link shortened');
  }
}
