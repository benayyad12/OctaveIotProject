import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirService {
  private apiUrl = 'https://octave-api.sierrawireless.io/v5.0/ssio_hammache_benayyad/event/s655b41ec6bf1084309ea18f6';
  private xAuthToken = 'eB8GyzyWNMJE19AerLuEQz7YyevejSIS';
  private xAuthUser = 'abir_hammache';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Auth-Token': this.xAuthToken,
    'X-Auth-User': this.xAuthUser,
  });

  constructor(private http: HttpClient) {}

  getAirValues(): Observable<number[]> {
    return this.http.get<any>(this.apiUrl,{ headers: this.headers }).pipe(
      map(response => response.body.map(item => item.elems.environment.iaqValue))
    );
  }
 }
