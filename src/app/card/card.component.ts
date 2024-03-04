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
          fill: false,
          borderColor: '#FF0000',  // Rouge, modifiez cette valeur pour changer la couleur de la ligne
          // tension: 0.4
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
