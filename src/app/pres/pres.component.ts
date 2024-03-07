import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PressureService } from '../pressure.service';

@Component({
  selector: 'app-pres',
  templateUrl: './pres.component.html',
  styleUrl: './pres.component.css'
})
export class PresComponent {

  pressureValues: number[];
  mostRecentPressureValue: number;

  constructor(private pressureService: PressureService) {}

  // ngOnInit() {
  //   this.pressureService.getPressureValues().subscribe(
  //     (values) => {
  //       this.pressureValues = values;
  //       console.log('Pressure values:', this.pressureValues);
  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   );
  // }
  ngOnInit() {
    // this.pressureService.getPressureValues().subscribe(
    //   (values) => {
    //     // Update the most recent pressure value
    //     this.mostRecentPressureValue = values.length > 0 ? values[values.length - 1] : null;
    //     console.log('Most Recent Pressure value:', this.mostRecentPressureValue);
    //   },
    //   (error) => {
    //     console.error('Error fetching data:', error);
    //   }
    // );
  }

}
