import { Vehicle } from '../models/vehicle';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VehicleService {
    vehicles = [];

    url = 'http://localhost:4200/insurances/vehicles';
    constructor(private http: Http) { }
    create(vehicle) {
        // this.find(vehicle.chassis)
        //     .subscribe(res => {
        //         if (res !== undefined) {
        //             vehicle = res;
        //             // return http.get
        //         }
        //     });
        // const vehicleToCreate = new Vehicle();
        // for (const key in vehicle) {
        //     if (vehicleToCreate.hasOwnProperty(key)) {
        //         vehicleToCreate[key] = vehicle[key];
        //     }
        // }

        // return Observable.create(x => x.next(vehicleToCreate));
        // const headers = new Headers({ 'Content-Type': 'application/json' });
        // const options = new RequestOptions({ headers: headers });
        // return this.http.post(this.url, vehicleToCreate, options)// url???
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
    }

    find(vehicleChassis) {
        // const vehicleFound = this.vehicles.find(x => x.chassis === vehicleChassis);
        // return Observable.create(x => x.next(vehicleFound));

        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // const params = new URLSearchParams();
        // params.append('chassis', vehicleChassis);
        // const options = new RequestOptions({ headers: headers, params: params });
        // return this.http.get(this.url, options)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
    }

    getAll() {
        // return Observable.create(x => x.next(this.vehicles));

        // return this.http.get(this.url)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);});
    }
}
