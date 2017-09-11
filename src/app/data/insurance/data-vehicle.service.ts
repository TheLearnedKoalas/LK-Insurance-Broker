import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Vehicle } from "../../insurance/models/vehicle";

@Injectable()
export class DataVehicleService {
    private vehiclesUrl = 'api/vehicles';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {
    }
    private extractData(res: Response) {
        const body = res.json();
        return body.data || {};
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    getAll(): Observable<Vehicle[]> {
        return this.http.get(this.vehiclesUrl)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };

    getById(chassis: string): Observable<Vehicle> {
        const url = `${this.vehiclesUrl}?chassis=${chassis}`;

        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }


    update(vehicle: Vehicle): Observable<Vehicle> {
        const url = `${this.vehiclesUrl}?chassis=${vehicle.chassis}`;

        return this.http
            .put(url, JSON.stringify(vehicle), { headers: this.headers })
            .catch(this.handleErrorObservable);
    }

    create(vehicle: Vehicle): Observable<Vehicle> {
        // let exists = false;
        // this.getById(client.clientId).subscribe(res => {
        //     if (Object.keys(res).length !== 0) {
        //         exists = true;
        //         client = res;
        //     }
        // });
        // if (exists) {
        //     return Observable.create(x => x.next(client));
        // }

        return this.http.post(this.vehiclesUrl, JSON.stringify(vehicle), { headers: this.headers })
            .map((res) => res.json().data as Vehicle)
            .catch(this.handleErrorObservable);
    }

    delete(vehicle: Vehicle | string): Observable<Vehicle> {
        const chassis = typeof vehicle === 'string' ? vehicle : vehicle.chassis;
        const url = `${this.vehiclesUrl}?chassis=${chassis}`;

        return this.http.delete(url, { headers: this.headers })
            .catch(this.handleErrorObservable);
    }
}
