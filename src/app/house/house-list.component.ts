import { Component, OnInit } from '@angular/core';

import { IHouse } from './house';
import { HousesService } from './house.service';

@Component({
    selector: 'app-house-list',
    templateUrl: 'house-list.component.html',
    styleUrls: ['house-list.component.css']
})
export class HouseListComponent implements OnInit {
    pageTitle = 'House List';
    listFilter: string;
    errorMessage: string;

    filteredHouses: IHouse[];
    houses: IHouse[];

    constructor(private _houseService: HousesService) {
    }

    ngOnInit(): void {
        this.houses = this._houseService.getHouses();
            // .subscribe(houses => this.houses = houses,
            //     error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'House List: ' + message;
    }

}
