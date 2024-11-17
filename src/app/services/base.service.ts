import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class BaseService {
    public baseUrl: string;
    public otpManagementUrl: string = '';
    public authManagementUrl: string = '';

    private readonly OTP_MANAGEMENT_URL = 'v1/otp/';
    private readonly AUTH_MANAGEMENT_URL = 'v1/auth/';

    constructor() {
        this.baseUrl = environment.baseUrl;
        this.setUrls();
    }

    private setUrls(): void {
        this.otpManagementUrl = this.baseUrl + this.OTP_MANAGEMENT_URL;
        this.authManagementUrl = this.baseUrl + this.AUTH_MANAGEMENT_URL;
    }
}