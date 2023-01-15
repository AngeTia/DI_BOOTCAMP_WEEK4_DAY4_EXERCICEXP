import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  myContact = new Contact();

  constructor() { }

  ngOnInit(): void {
  }

  submitting(form: NgForm) {
    console.log( this.myContact );
  }

}

class Contact {
  name: string | undefined;
  email: string | undefined;
  messaage: string | undefined;

}
