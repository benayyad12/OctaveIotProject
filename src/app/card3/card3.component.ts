import { Component } from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrl: './card3.component.css'
})
export class Card3Component {
  data: any;

  constructor() {
    // Initialize your chart data here
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'humidity',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
  }
}
