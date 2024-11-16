import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'sign_in', component: LoginComponent},
    {path: 'sign_up', component: SignupComponent},
    {path: 'forgot_password', component: ForgotPasswordComponent}
];
