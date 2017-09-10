import { Company } from './../models/company';
import { Individual } from './../models/individual';
import { Client } from './../models/client';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ClientService {

    url = 'http://localhost:4200/insurances/clients';
    clients = [];
    constructor() { }
    create(client): Observable<Client> {
        this.find(client.id)
            .subscribe(res => {
                if (res !== undefined) { // ok???
                    // return http.get
                    client = res;
                }
            });
        let clientToCreate: Client;
        if (client.clientType === 'физическо лице') {
            clientToCreate = new Individual(client.id, client.name, client.adress);
        } else if (client.clientType === 'юридическо лице') {
            clientToCreate = new Company(client.id, client.name, client.adress);
        }

        return Observable.create(x => x.next(clientToCreate));
        // const headers = new Headers({ 'Content-Type': 'application/json' });
        // const options = new RequestOptions({ headers: headers });
        // return this.http.post(this.url + '/client', clientToCreate, options)// url???
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
    }

    find(clientId): Observable<Client> {
        const clientFount = this.clients.find(x => x.id === clientId);
        return Observable.create(x => x.next(clientFount));
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // const params = new URLSearchParams();
        // params.append('id', clientId);
        // const options = new RequestOptions({ headers: headers, params: params });
        // return this.http.get(this.url, options)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
    }

    getAll(): Observable<Client[]> {
        return Observable.create(x => x.next(this.clients));
         // return this.http.get(this.url)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);});
    }

    private extractData(res: Response) {
        const body = res.json();
        return body.data || {};
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

}
