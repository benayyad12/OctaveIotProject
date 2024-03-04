import { Component } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.css'
})
export class Card2Component {

  data: any;

  constructor() {
    // Initialize your chart data here
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'air quality',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#12E186',  // Rouge, modifiez cette valeur pour changer la couleur de la ligne
          // tension: 0.4
        },
      ],
    };
  }

}
