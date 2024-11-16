import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ]
})

export class LoginComponent {
  usernameOrEmail: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  isOTPMode: boolean = false;

  constructor(
    private router: Router,
    private library: FaIconLibrary
  ) {
    this.library.addIcons(faEye, faEyeSlash);
  }

  navigateToLanding() {
    this.router.navigate(['']);
  }

  navigateToSignUp() {
    this.router.navigate(['/sign_up']);
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot_password']);
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    console.log('Logging in with password:', this.password);
  }
}