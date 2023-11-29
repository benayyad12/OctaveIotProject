import { Component } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.css'
})
export class Card1Component {

  data: any;

  constructor() {
    // Initialize your chart data here
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'pressure',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
  }


}
