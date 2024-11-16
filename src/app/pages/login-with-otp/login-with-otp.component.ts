import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-with-otp',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login-with-otp.component.html',
  styleUrl: './login-with-otp.component.scss'
})
export class LoginWithOtpComponent {
  email: string = '';
  otp: string = '';  
  loginSuccess: boolean = false;
  otpSent: boolean = false;
  otpVerified: boolean = false;
  resendTimer: number = 60;
  timerInterval: any;

  constructor(
    private router: Router
  ) { }

  navigateToLanding() {
    this.router.navigate(['']);
  }

  navigateToDashboard() {
    this.router.navigate(['']);
  }

  // Function to send OTP
  sendOTP() {
    console.log('OTP sent to:', this.email);
    this.otpSent = true;

    // Start a resend timer
    this.resendTimer = 60;
    this.startResendTimer();
  }

  // Function to verify OTP
  verifyOTP() {
    if (this.otp === '123456') { // Replace with actual OTP verification
      this.otpVerified = true;
      this.otpSent = false;
    } else {
      alert('Invalid OTP');
    }
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

  login() {
    this.verifyOTP();
    if (this.otpVerified) {
      this.loginSuccess = true;

      // Start a 5-second timer to redirect to the login page
      setTimeout(() => {
        this.navigateToDashboard();
      }, 5000);
    }
  }
}
