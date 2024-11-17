import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { OtpService } from '../../services/otp/otp.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ]
})

export class SignupComponent {
  email: string = '';
  otp: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  otpSent: boolean = false;
  otpVerified: boolean = false;
  signupSuccess: boolean = false;
  resendTimer: number = 60;
  timerInterval: any;

  constructor(
    private router: Router,
    private library: FaIconLibrary,
    private service: OtpService
  ) {
    this.library.addIcons(faEye, faEyeSlash);
  }

  navigateToLanding() {
    this.router.navigate(['']);
  }

  navigateToSignIn() {
    this.router.navigate(['/sign_in']);
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Function to send OTP
  sendOTP() {
    this.service.sendVerifyEmailOtp(this.email).subscribe({
      next: () => {
        this.otpSent = true;
      },
      error: () => {
        this.otpSent = false;
      }});

    // Start a resend timer
    this.resendTimer = 60;
    this.startResendTimer();
  }

  // Function to verify OTP
  verifyOTP() {
    this.service.validateOtp(this.email, this.otp).subscribe({
      next: () => {
        this.otpVerified = true;
        this.otpSent = false;
      },
      error: () => {
        this.otpVerified = false;
        this.otpSent = true;
      }
    });
  }

  // Function to start a resend timer
  startResendTimer() {
    this.timerInterval = setInterval(() => {
      if (this.resendTimer > 0) {
        this.resendTimer--;
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  // Function to handle sign-up logic
  signup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Replace with actual sign-up API logic
    console.log('User signed up successfully!');
    this.signupSuccess = true;

    //Start a 10-second timer to redirect to the landing/dashboard
    setTimeout(() => {
      this.navigateToDashboard();
    }, 10000);
  }

  // Function to navigate to the dashboard
  navigateToDashboard() {
    // Redirect to the dashboard (or landing page for now)
    this.router.navigate(['/']);
  }
}