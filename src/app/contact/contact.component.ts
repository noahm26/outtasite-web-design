import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required]],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      },
    ],
    phone: [''],
    services: [''],
    urgency: [''],
    message: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit(): void {}

  get name() {
    return this.form.controls['name'];
  }

  get email() {
    return this.form.controls['email'];
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.emailService.sendEmail();
    }
  }
}
