import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { ChartModule } from 'primeng/chart';
import { Chart } from 'chart.js';
import { TempComponent } from './temp/temp.component';
import {MatCardModule} from '@angular/material/card';
import { HumComponent } from './hum/hum.component';
import { AirComponent } from './air/air.component';
import { PresComponent } from './pres/pres.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Card3Component } from './card3/card3.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    TempComponent,
    HumComponent,
    AirComponent,
    PresComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    PresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    ChartModule,
    MatCardModule
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
