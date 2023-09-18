import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  imageUrl: string = '../../../assets/tacos_close_up_400x260.png'
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      // Handle form submission here
      console.log(this.contactForm.value);
    }
  }
  submitting = false;

  handleSubmit() {
    this.submitting = true;

    // Simulate an asynchronous action (e.g., an HTTP request)
    setTimeout(() => {
      // After the action is complete, set submitting back to false
      this.submitting = false;
    }, 2000); // Simulated 2 seconds delay
  }
}
