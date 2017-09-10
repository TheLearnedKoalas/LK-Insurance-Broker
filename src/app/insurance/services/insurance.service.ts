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

@Injectable()
export class InsuranceService {
    insurances = [];

    url = 'http://localhost:4200/insurances';

    constructor(private http: Http, private clientService: ClientService,
        private vehicleService: VehicleService) {
    }

    create(insuranceDetails, client, vehicle) {
        // this.clientService.find(client.id)
        //     .subscribe(res => {
        //         if (res === undefined) { // ok?
        //             this.clientService.create(client)
        //                 .subscribe(c => {
        //                     client = c;
        //                 });
        //         } else {
        //             client = res;
        //         }
        //     });
        // this.vehicleService.find(vehicle.chassis)
        //     .subscribe(res => {
        //         if (res === undefined) {
        //             this.vehicleService.create(vehicle)
        //                 .subscribe(v => {
        //                     vehicle = v;
        //                 });
        //         } else {
        //             vehicle = res;
        //         }
        //     });
        // const insurance = new ThirdPartInsurance(client, vehicle, 'current'); // userName
        // if (insuranceDetails.hasOwnProperty('startDate')) {
        //     insurance.startDate = new Date(Date.now());
        //     insurance.endDate = insurance.startDate;
        //     insurance.endDate.setDate(insurance.endDate.getDate() + 365);
        // }
        // if (insuranceDetails.hasOwnProperty('totalPayment')) {
        //     insurance.totalPayment = insuranceDetails.totalPayment;
        // }
        // if (insuranceDetails.hasOwnProperty('paymentsCount')) {
        //     insurance.paymentsCount = insuranceDetails.paymentsCount;
        // }
        // this.insurances.push(insurance);
        // return Observable.create(x => x.next(insurance));

        // const headers = new Headers({ 'Content-Type': 'application/json' });
        // const options = new RequestOptions({ headers: headers });
        // return this.http.post(this.url + '/insurance', insurance, options)// url???
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
    }

    find(clientId, vehicleChassis) {
        // const insurance = this.insurances.find(x => x.client.id === clientId
        //     && x.vehicle.chassis === vehicleChassis);

        // return Observable.create(x => x.next(insurance));
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // const params = new URLSearchParams();
        // params.append('client.id',clientId); //to fix???
        // params.append('vehicle.chassis',vehicleChassis); //to fix???
        // const options = new RequestOptions({ headers: headers, params: params });
        // return this.http.get(this.url, options)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
    }

    getAllPolices()  {
        // return Observable.create(x => x.next(this.insurances.filter(i => i.status === 'policy')));
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // const params = new URLSearchParams();
        // params.append('status', 'policy');
        // const options = new RequestOptions({ headers: headers, params: params });
        // return this.http.get(this.url, options)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
    }

    getAllOffers() {
        // return Observable.create(x => x.next(this.insurances.filter(i => i.status === 'offer')));
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // const params = new URLSearchParams();
        // params.append('status', 'offer');
        // const options = new RequestOptions({ headers: headers, params: params });
        // return this.http.get(this.url, options)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
    }

    finishPolicyOffer(offerId, policyNumber) {
        // let offer: ThirdPartInsurance;
        // this.findById(offerId)
        //     .subscribe(res => {
        //         offer = res;
        //     });
        // offer.status = 'policy';
        // offer.number = policyNumber;
        // return Observable.create(x => x.next(offer));
        // let insurance: ThirdPartInsurance;
        // this.findById(offerId)
        //     .subscribe(res => {
        //         insurance = res;
        //     });
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // const options = new RequestOptions({ headers: headers });
        // return this.http.put(this.url, insurance, options)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
    }

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

    findByNumber(number) {
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // const params = new URLSearchParams();
        // params.append('number', number);
        // const options = new RequestOptions({ headers: headers, params: params });
        // return this.http.get(this.url, options)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
        // return Observable.create(x => x.next(this.insurances.find(i => i.number === number)));
    }

    private findById(id){
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // const params = new URLSearchParams();
        // params.append('id', id);
        // const options = new RequestOptions({ headers: headers, params: params });
        // return this.http.get(this.url, options)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
        // return Observable.create(x => x.next(this.insurances.find(i => i.id === id)));
    }  
}

