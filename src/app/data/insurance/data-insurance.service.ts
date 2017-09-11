import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ThirdPartInsurance } from "../../insurance/models/thirdPartInsurance";
import { IUser } from "../../models/interfaces/user";

@Injectable()
export class DataInsuranceService {
    private insurancesUrl = 'api/insurances';
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

    getAll(): Observable<ThirdPartInsurance[]> {
        return this.http.get(this.insurancesUrl)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };

    getById(insuranceId: string): Observable<ThirdPartInsurance> {
        const url = `${this.insurancesUrl}?insuranceId=${insuranceId}`;

        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    filterByStatus(status:string): Observable<ThirdPartInsurance[]> {
        const url = `${this.insurancesUrl}?status=${status}`;

        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }


    update(insurance: ThirdPartInsurance): Observable<ThirdPartInsurance> {
        const url = `${this.insurancesUrl}?insuranceId=${insurance.insuranceId}`;

        return this.http
            .put(url, JSON.stringify(insurance), { headers: this.headers })
            .catch(this.handleErrorObservable);
    }

    create(insurance: ThirdPartInsurance): Observable<ThirdPartInsurance> {
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

        return this.http.post(this.insurancesUrl, JSON.stringify(insurance), { headers: this.headers })
            .map((res) => res.json().data as ThirdPartInsurance)
            .catch(this.handleErrorObservable);
    }

    getByPolicyNumber(number){
        const url = `${this.insurancesUrl}?number=${number}`;
        
                return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleErrorObservable);
    }

    delete(insurance: ThirdPartInsurance | string): Observable<ThirdPartInsurance> {
        const insuranceId = typeof insurance === 'string' ? insurance : insurance.insuranceId;
       const url = `${this.insurancesUrl}?insuranceId=${insuranceId}`;

        return this.http.delete(url, { headers: this.headers })
            .catch(this.handleErrorObservable);
    }
}