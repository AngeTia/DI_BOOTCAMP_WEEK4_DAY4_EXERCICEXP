import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  favoriteColor?: string
  colorForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.colorForm = this.formBuilder.group({
      favoriteColor: ["", [Validators.required]]
    });
  }

  submit() {
    console.log( this.colorForm.value.favoriteColor )
    this.favoriteColor = this.colorForm.value.favoriteColor;
  }

}
