import { Component } from '@angular/core';
import { PressureService } from '../pressure.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  data: any;

  constructor() {
    // Initialize your chart data here
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'temperature',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
  }


  // data: any;

  // constructor(private pressureService: PressureService) {}

  // ngOnInit() {
  //   this.pressureService.getData().subscribe((result) => {
  //     this.data = result;
  //     console.log(this.data); // log or further process the data
  //   });
  // }
}
