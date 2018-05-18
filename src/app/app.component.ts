import {Component } from '@angular/core';
import { HousesService } from './house/house.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HousesService]
})
export class AppComponent {
  pageTitle = 'Zillow Powered App';
}
