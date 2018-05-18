import { Injectable } from '@angular/core';

import { IHouse } from './house';

@Injectable()
export class HousesService {
    getHouses(): IHouse[] {
        return [
            {
                'zpid': 1,
                'yearBuilt': 1900,
                'lotSizeSqFt': 10,
                'finishedSqlFt': 20,
                'street': 'example',
                'zipcode': 3,
                'city': 'Allentown',
                'state': 'PA',
                'latitude': 4,
                'longitude': 5,
                'zestimateAmount': 100
            }
        ];
    }
}
