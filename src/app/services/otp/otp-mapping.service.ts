import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})

export class OtpMappingService extends BaseService {
  private readonly SEND_VERIFY_EMAIL_OTP = 'send/verify-email/';
  private readonly VALIDATE_OTP = 'validate';

  constructor() { 
    super();
  }

  public getSendVerifyEmailOtpUrl(email: string) {
    return this.otpManagementUrl + this.SEND_VERIFY_EMAIL_OTP + email;
  }

  public getValidateOtpUrl() {
    return this.otpManagementUrl + this.VALIDATE_OTP;
  }
}