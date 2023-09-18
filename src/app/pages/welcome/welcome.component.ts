import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  onBack(): void {
    console.log('onBack');}

  imageUrl: string = '../../../assets/tacos_and_drink_400x267.png'
  
  constructor() { }

  ngOnInit() {  

  }


}
