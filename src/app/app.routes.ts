import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginWithOtpComponent } from './pages/login-with-otp/login-with-otp.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'sign_in', component: LoginComponent},
    {path: 'sign_up', component: SignupComponent},
    {path: 'forgot_password', component: ForgotPasswordComponent},
    {path: 'otp_sign_in', component: LoginWithOtpComponent}
];
