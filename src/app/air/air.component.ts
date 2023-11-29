import { Component } from '@angular/core';
import { AirService } from '../air.service';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrl: './air.component.css'
})
export class AirComponent {
  mostRecentAirValue: number;

  constructor(private airService: AirService) {}

  ngOnInit() {
    this.airService.getAirValues().subscribe(
      (values) => {
        // Update the most recent pressure value
        this.mostRecentAirValue = values.length > 0 ? values[values.length - 1] : null;
        console.log('Most Recent Air Quality value:', this.mostRecentAirValue);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
