// import { Vehicle } from './models/vehicle';
// import { Individual } from './models/individual';
// import { Company } from './models/company';
import { Client } from './models/client';
// import { ThirdPartInsurance } from './models/thirdPartInsurance';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs';

@Injectable()
export class InsuranceService {
    insurances = [];

    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {

    }
    // getinsuranceForm(url: string, param: any, headers?: Headers): Observable<any> {
    //     const params: URLSearchParams = new URLSearchParams();
    //     for (const key in param) {
    //         if (param.hasOwnProperty(key)) {
    //             const val = param[key];
    //             params.set(key, val);
    //         }
    //     }

    //     return this.http
    //         .get('http://localhost:4200/insurances/form', { search: params })
    //         .map(res => res.json())
    //         .share();
    // }
}
