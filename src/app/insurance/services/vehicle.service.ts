import { Vehicle } from '../models/vehicle';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DataVehicleService } from "../../data/insurance/data-vehicle.service";

@Injectable()
export class VehicleService {
    vehicles = [];

    url = 'http://localhost:4200/insurances/vehicles';
    constructor(private httpService: DataVehicleService) { }
    create(vehicleToAdd) {
        let vehicle= new Vehicle();
        console.log(vehicleToAdd);
        vehicle.chassis = vehicleToAdd.chassis; // validation
        vehicle.brand = vehicleToAdd.brand; // validation
        vehicle.model = vehicleToAdd.model;
        vehicle.registrationNumber = vehicleToAdd.registrationNumber;
        
        return this.httpService.create(vehicle);
    }

    getById(chassis) {
        return this.httpService.getById(chassis);
    }

    getAll() {
        return this.httpService.getAll();
    }
}
