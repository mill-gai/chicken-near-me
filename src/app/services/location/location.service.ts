import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../../model/location';

@Injectable({
    providedIn: 'root',
})
export class LocationService {
    constructor(private httpClient: HttpClient) {}

    getAllLocations(): Observable<Location[]> {
        return this.httpClient.get<Array<Location>>(
            'http://localhost:8081/api/location'
        );
    }
}
