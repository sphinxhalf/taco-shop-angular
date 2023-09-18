import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {  
  data = [
    {
      name: 'Crunchy',
      qty: 1,
      price: '$1.50'
    },
    {
      name: 'Crunchy',
      qty: 2,
      price: '$2.50'
    
    },
    {
      name: 'Crunchy',
      qty: 3,
      price: '$3.50'
    },
    {
      name: 'Soft',
      qty: 1,
      price: '$2.00'
    },
    {
      name: 'Soft',
      qty: 2,
      price: '$3.50'
    },
    {
      name: 'Soft',
      qty: 3,
      price: '$4.50'
    },
    {
      name: 'Chips & Salsa',
      price: '$2'
    }
  ]    
}
    
    
    
