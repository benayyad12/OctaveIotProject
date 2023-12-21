import { Component,ChangeDetectorRef  } from '@angular/core';
import { AirService } from '../air.service';
import { Subscription, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrl: './air.component.css'
})
export class AirComponent {
  mostRecentAirValue: number;
  extractedDigits: number;
  private subscription: Subscription;

  constructor(private airService: AirService) {}

  ngOnInit() {
    // Use interval to trigger the data fetch every 80 seconds
    this.subscription = interval(30000).pipe(
      switchMap(() => this.airService.getAirValues())
    ).subscribe(
      (values) => {
        // Update the most recent air quality value
        this.mostRecentAirValue = values.length > 0 ? values[values.length - 1] : null;
        console.log('Most Recent Air Quality value:', this.mostRecentAirValue);
        this.extractedDigits = this.extractTwoDigitsBeforeDecimal(this.mostRecentAirValue);
        console.log('Extracted Digits:', this.extractedDigits);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }

  private extractTwoDigitsBeforeDecimal(value: number): number {
    if (value != null) {
      // Round to two decimal places and convert to a number
      return +value.toFixed(2);
    }
    
    // Return null if the value is not valid
    return null;
  }
}