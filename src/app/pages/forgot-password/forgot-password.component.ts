import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email: string = '';
  otp: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  otpSent: boolean = false;
  otpVerified: boolean = false;
  passwordResetSuccess: boolean = false;
  resendTimer: number = 60;
  timerInterval: any;

  constructor(private router: Router) { }

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

  // Function to reset password
  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Replace with actual password reset logic
    console.log('Password reset successfully!');
    this.passwordResetSuccess = true;

    // Start a 10-second timer to redirect to the login page
    setTimeout(() => {
      this.navigateToSignIn();
    }, 10000);
  }

  // Function to navigate to the login page
  navigateToSignIn() {
    this.router.navigate(['/sign_in']);
  }

  navigateToLanding() {
    this.router.navigate(['']);
  }
}