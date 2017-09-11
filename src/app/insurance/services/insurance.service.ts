import { VehicleService } from './vehicle.service';
import { ClientService } from './client.service';

import { Vehicle } from '../models/vehicle';
import { Individual } from '../models/individual';
import { Company } from '../models/company';
import { Client } from '../models/client';
import { ThirdPartInsurance } from '../models/thirdPartInsurance';
import { IInsurance } from '../../models/interfaces/insurance';

import { Injectable, ReflectiveInjector } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs';

import { DataClientService } from "../../data/insurance/data-client.service";
import { DataVehicleService } from "../../data/insurance/data-vehicle.service";
import { UserService } from "../../shared/user/user.service";
import { DataInsuranceService } from "../../data/insurance/data-insurance.service";

@Injectable()
export class InsuranceService {
    constructor(private httpService: DataInsuranceService,
        private userService: UserService,
        private clientService: ClientService,
        private vehicleService: VehicleService) { }
    create(clientId, chassis, insuranceCompany, totalPayment, paymentsCount) {
        return Observable
            .zip(
            this.clientService.getById(clientId),
            this.vehicleService.getById(chassis),
            (client, vehicle) => {
                const user = this.userService.getCurrentUser();
                const insurance = new ThirdPartInsurance(client[0], vehicle[0], user);
                insurance.paymentsCount = paymentsCount;
                insurance.totalPayment = totalPayment;
                insurance.insuranceCompany = insuranceCompany;

                // if (user.hasOwnProperty('insurances')) {
                //     user.insurances.push(insurance);
                // } else {
                //    console.log('fff');
                // }

                // console.log(user);
                return this.httpService.create(insurance);
            });
    }

    private getById(insuranceId) {
        return this.httpService.getById(insuranceId);
    }

    getAll() {
        return this.httpService.getAll();
    }

    // find(clientId, vehicleChassis) {
    //     // const insurance = this.insurances.find(x => x.client.id === clientId
    //     //     && x.vehicle.chassis === vehicleChassis);

    //     // return Observable.create(x => x.next(insurance));
    //     // const headers = new Headers();
    //     // headers.append('Content-Type', 'application/json');
    //     // const params = new URLSearchParams();
    //     // params.append('client.id',clientId); //to fix???
    //     // params.append('vehicle.chassis',vehicleChassis); //to fix???
    //     // const options = new RequestOptions({ headers: headers, params: params });
    //     // return this.http.get(this.url, options)
    //     //     .map(this.extractData)
    //     //     .catch(this.handleErrorObservable);
    // }

    getAllPolices() {
        const status = 'policy';
        return this.httpService.filterByStatus(status);
    }

    getAllOffers() {
        const status = 'offer';
        return this.httpService.filterByStatus(status);
    }

    finishPolicyOffer(offerId, policyNumber) {
        return this.httpService.getById(offerId)
            .subscribe(res => {
                res.status = 'policy';
                res.number = policyNumber;
                return this.updateInsurance(res);
            })
    }

    updateInsurance(insurance: ThirdPartInsurance) {
        return this.httpService.update(insurance);
    }

    getAllPolicesforUser() {
        return this.userService.getCurrentUser().insurances;
    }

    findByNumber(number) {
        return this.httpService.getByPolicyNumber(number);
    }
}
