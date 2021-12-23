import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail() {
    this.http.post('/.netlify/functions/sendgrid', {
      message: 'My test message in Netlify Sendgrid setup',
    });
  }
}
