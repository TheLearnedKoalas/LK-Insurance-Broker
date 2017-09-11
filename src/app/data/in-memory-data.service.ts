import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { InsuranceType } from "../models/enums/insuranceType";

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      {
        id: 0,
        username: 'admin',
        password: '123qwe',
        firstName: 'admin-first',
        lastName: 'admin-last',
        email: 'admin@mail.com',
        telephone: '+359889364875',
        isAdmin: true,
        insurances: []
      },
      {
        id: 1,
        username: 'user',
        password: '123qwe',
        firstName: 'user-first',
        lastName: 'user-last',
        email: 'user@mail.com',
        telephone: '+359884864848',
        isAdmin: false,
        insurances: [
          {
            startingDate: Date.now(),
            endingDate: Date.UTC(2018, 12, 29),
            price: 100,
            insuranceType: 2 as InsuranceType,
            insuranceObject: { signature: "testObject" }
          }
        ]
      }
    ];
    return { users };
  }

}
