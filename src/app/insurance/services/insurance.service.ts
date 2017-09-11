import { VehicleService } from './vehicle.service';
import { ClientService } from './client.service';

import { Vehicle } from '../models/vehicle';
import { Individual } from '../models/individual';
import { Company } from '../models/company';
import { Client } from '../models/client';
import { ThirdPartInsurance } from '../models/thirdPartInsurance';

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
    create(insuranceToAdd) {
      return  Observable
            .zip(
            this.clientService.getById(insuranceToAdd.client.clientId),
            this.vehicleService.getById(insuranceToAdd.vehicle.chassis),
            (client, vehicle)=> {
                //  console.log(insuranceToAdd);
                const user = this.userService.getCurrentUser();
                const insurance = new ThirdPartInsurance(client[0], vehicle[0], user);
                // insurance.paymentsCount = insuranceToAdd.paymentsCount.value;
                // insurance.totalPayment = insuranceToAdd.totalPayment.value;
                insurance.insuranceCompany = insuranceToAdd.insuranceCompany.value;
                // console.log(insurance);
                // user.insurances.push(insurance);
                // console.log(this.userService.getCurrentUser());
                return this.httpService.create(insurance);
            });
    }

    // private getById(insuranceId) {
    //     return this.httpService.getById(insuranceId);
    // }

    // getAll() {
    //     return this.httpService.getAll();
    // }

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

    // getAllPolices() {
    //     const status = 'policy';
    //     return this.httpService.filterByStatus(status);
    // }

    // getAllOffers() {
    //     const status = 'offer';
    //     return this.httpService.filterByStatus(status);
    // }

    // finishPolicyOffer(offerId, policyNumber) {
    //     // let offer: ThirdPartInsurance;
    //     // this.findById(offerId)
    //     //     .subscribe(res => {
    //     //         offer = res;
    //     //     });
    //     // offer.status = 'policy';
    //     // offer.number = policyNumber;
    //     // return Observable.create(x => x.next(offer));
    //     // let insurance: ThirdPartInsurance;
    //     // this.findById(offerId)
    //     //     .subscribe(res => {
    //     //         insurance = res;
    //     //     });
    //     // const headers = new Headers();
    //     // headers.append('Content-Type', 'application/json');
    //     // const options = new RequestOptions({ headers: headers });
    //     // return this.http.put(this.url, insurance, options)
    //     //     .map(this.extractData)
    //     //     .catch(this.handleErrorObservable);
    // }

    // getAllPolicesforUser(userName): Observable<ThirdPartInsurance[]> { // from users
    //     return Observable
    //         .create(x => x.next(this.insurances.filter(i => i.status === 'policy'
    //             && i.user === userName)));
    //     // const headers = new Headers();
    //     // headers.append('Content-Type', 'application/json');
    //     // const params = new URLSearchParams();
    //     // params.append('status', 'policy');
    //     // params.append('user', 'userName');
    //     // const options = new RequestOptions({ headers: headers, params: params });
    //     // return this.http.get(this.url, options)
    //     //     .map(this.extractData)
    //     //     .catch(this.handleErrorObservable);
    // }

    // findByNumber(number) {
    //     // const headers = new Headers();
    //     // headers.append('Content-Type', 'application/json');
    //     // const params = new URLSearchParams();
    //     // params.append('number', number);
    //     // const options = new RequestOptions({ headers: headers, params: params });
    //     // return this.http.get(this.url, options)
    //     //     .map(this.extractData)
    //     //     .catch(this.handleErrorObservable);
    //     // return Observable.create(x => x.next(this.insurances.find(i => i.number === number)));
    // }

}
