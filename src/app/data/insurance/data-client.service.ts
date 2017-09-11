import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { Client } from "../../insurance/models/client";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataClientService {
    private clientsUrl = 'api/clients';
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

    getAll(): Observable<Client[]> {
        return this.http.get(this.clientsUrl)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };

    getById(clientId: string): Observable<Client> {
        const url = `${this.clientsUrl}?clientId=${clientId}`;

        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }


    update(client: Client): Observable<Client> {
        const url = `${this.clientsUrl}?clientId=${client.clientId}`;

        return this.http
            .put(url, JSON.stringify(client), { headers: this.headers })
            .catch(this.handleErrorObservable);
    }

    create(client: Client): Observable<Client> {
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

        return this.http.post(this.clientsUrl, JSON.stringify(client), { headers: this.headers })
            .map((res) => res.json().data as Client)
            .catch(this.handleErrorObservable);
    }

    delete(client: Client | string): Observable<Client> {
        const clientId = typeof client === 'string' ? client : client.clientId;
       const url = `${this.clientsUrl}?clientId=${clientId}`;

        return this.http.delete(url, { headers: this.headers })
            .catch(this.handleErrorObservable);
    }
}
