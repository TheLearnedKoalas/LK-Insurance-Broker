import { Observable } from 'rxjs/Observable';
import { Company } from './../models/company';
import { Individual } from './../models/individual';
import { Client } from './../models/client';

import { Injectable } from '@angular/core';

import { DataClientService } from "../../data/insurance/data-client.service";



@Injectable()
export class ClientService {

    constructor(private httpService: DataClientService) { }
    create(clientToAdd) {
        // console.log(clientToAdd);
        let client: Client;
        const clientId = clientToAdd.clientId; // validation
        // console.log(clientId);
        const name = clientToAdd.name; // validation
        const adress = clientToAdd.adress || '';
        const contacts = clientToAdd.constacts || {};
        if (clientToAdd.clientType == 'физическо лице') { // enum
            client = new Individual(clientId.toString(), name, adress);
            client.clientId=clientId;
            client.name=name;
            client.contacts = contacts;
            // console.log(client);
        } else if (clientToAdd.clientType == 'юридическо лице') { // enum
            client = new Company(clientId.toString(), name, adress);
            client.contacts = contacts;
        }
        return this.httpService.create(client);
    }

    getById(clientId) {
        return this.httpService.getById(clientId);
    }

    getAll() {
        return this.httpService.getAll();
    }
}
