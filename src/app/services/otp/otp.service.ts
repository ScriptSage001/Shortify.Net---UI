import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OtpMappingService } from './otp-mapping.service';
import { ValidateOtp } from '../../shared/models/validate-otp-request';

@Injectable({
  providedIn: 'root'
})

export class OtpService {

  constructor(
    private http: HttpClient,
    private mappingService: OtpMappingService
  ) { }

  /*
   * Sends Email Verification OTP
   * @param email 
   * @returns 
   */
  public sendVerifyEmailOtp(email: string) : Observable<any> {
    const url = this.mappingService.getSendVerifyEmailOtpUrl(email);
    return this.http.post(url, null, { responseType: 'text' });
  }

  /*
   * Validates OTP 
   * @param email
   * @param otp
   * @returns
   */
  public validateOtp(email: string, otp: string): Observable<any> {
    const url = this.mappingService.getValidateOtpUrl();
    const body: ValidateOtp = {
      email: email,
      otp: otp
    };

    return this.http.post(url, body, { responseType: 'text' });
  }
}
