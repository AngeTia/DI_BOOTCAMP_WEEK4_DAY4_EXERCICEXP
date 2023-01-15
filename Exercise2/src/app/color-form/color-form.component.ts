import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  favoriteColor ?: string;
  displayColor? = "";

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.favoriteColor);
    this.displayColor = this.favoriteColor;
  }

}
