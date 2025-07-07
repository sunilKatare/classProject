import { Component } from '@angular/core';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent {
	public bikeNumber:any = 10;

  getMethod1(){
    return null;
  }
}
