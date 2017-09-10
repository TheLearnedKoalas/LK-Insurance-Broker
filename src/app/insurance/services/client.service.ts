import { Observable } from 'rxjs/Observable';
import { Company } from './../models/company';
import { Individual } from './../models/individual';
import { Client } from './../models/client';

import { Injectable } from '@angular/core';

import { DataClientService } from "../../data/user/data-client.service";



@Injectable()
export class ClientService {

    constructor(private httpService: DataClientService) { }
    create(clientToAdd) {
        let client: Client;
        const id = clientToAdd.id || ''; // validation
        const name = clientToAdd.name; // validation
        const adress = clientToAdd.adress || '';
        const contacts = clientToAdd.constacts || {};
        if (clientToAdd.clientType == 'физическо лице') { // enum
            client = new Individual(id, name, adress);
            client.contacts = contacts;
        } else if (clientToAdd.clientType == 'юридическо лице') { // enum
            client = new Company(id, name, adress);
            client.contacts = contacts;
        }
        return this.httpService.create(client)
            .subscribe((res) => {
                return Observable.create(x => x.next(res));
            });
    }



    // find(clientId): Observable<Client> {
    //     const clientFount = this.clients.find(x => x.id === clientId);
    //     return Observable.create(x => x.next(clientFount));
    //     // const headers = new Headers();
    //     // headers.append('Content-Type', 'application/json');
    //     // const params = new URLSearchParams();
    //     // params.append('id', clientId);
    //     // const options = new RequestOptions({ headers: headers, params: params });
    //     // return this.http.get(this.url, options)
    //     //     .map(this.extractData)
    //     //     .catch(this.handleErrorObservable);
    // }

    // getAll(): Observable<Client[]> {
    //     return Observable.create(x => x.next(this.clients));
    //      // return this.http.get(this.url)
    //     //     .map(this.extractData)
    //     //     .catch(this.handleErrorObservable);});
    // }
}
