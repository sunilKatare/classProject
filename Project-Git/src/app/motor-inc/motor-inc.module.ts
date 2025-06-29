import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailsComponent } from './car-details/car-details.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';



@NgModule({
  declarations: [
    CarDetailsComponent,
    BikeDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MotorIncModule { }
