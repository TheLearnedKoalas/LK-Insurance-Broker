import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const clients = [
      {
        clientId: '1234567890',
        clientType: 'физическо лице',
        name: 'Асена Пенчева',
        adress: 'адрес'
      },
      {
        clientId: '9876543210',
        clientType: 'физическо лице',
        name: 'Иван Иванов',
        adress: 'адрес'
      }
    ];

    const vehicles = [
      {
        vehicleType: 'лек',
        chassis: '1234',
        registrationNumber: 'СА1234СА',
        brand: 'VW',
        model: 'GOLF',
        firstReg: '2017',
        vehiclePower: '3000',
        enginePower: '200',
        weight: '0',
        color: 'черен',
        doorsCount: '5',
        keysCount: '2',
      },
      {
        vehicleType: 'лек',
        chassis: '5678',
        registrationNumber: 'СА5678СА',
        brand: 'VW',
        model: 'PASSAT',
        firstReg: '2013',
        vehiclePower: '200',
        enginePower: '100',
        weight: '0',
        color: 'черен',
        doorsCount: '5',
        keysCount: '2',
      }
    ]

    const insurances = [{
      user: { // policy
        id: 1,
        username: 'user',
        password: '123qwe',
        firstName: 'user-first',
        lastName: 'user-last'
      },
      client: {
        clientId: '1234567890',
        clientType: 'физическо лице',
        name: 'Асена Пенчева',
        adress: 'адрес'
      },
      vehicle: {
        vehicleType: 'лек',
        chassis: '1234',
        registrationNumber: 'СА1234СА',
        brand: 'VW',
        model: 'GOLF',
        firstReg: '2017',
        vehiclePower: '3000'
      },
      policyId: '12345asdd',
      number: 12345,
      status: 'policy',
      startDate: Date.now(),
      endDate: Date.UTC(2018, 12, 29),
      totalPayment: 200,
      paymentsCount: 4,
      insuranceCompany: 'Лев Инс'
    },
    { // offer
      user: {
        id: 1,
        username: 'user',
        password: '123qwe',
        firstName: 'user-first',
        lastName: 'user-last'
      },
      client: {
        clientId: '9876543210',
        clientType: 'физическо лице',
        name: 'Иван Иванов',
        adress: 'адрес'
      },
      vehicle: {
        vehicleType: 'лек',
        chassis: '5678',
        registrationNumber: 'СА5678СА',
        brand: 'VW',
        model: 'PASSAT',
        firstReg: '2013',
        vehiclePower: '200'
      },
      policyId: '12345asdd',
      status: 'offer',
      startDate: Date.now(),
      endDate: Date.UTC(2018, 12, 29),
      totalPayment: 200,
      paymentsCount: 4,
      insuranceCompany: 'Лев Инс'
    }];

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
            number: '12345',
            status: 'policy',
            startDate: Date.now(),
            endDate: Date.UTC(2018, 12, 29),
            totalPayment: 200,
            paymentsCount: 4,
            insuranceCompany: 'Лев Инс',
            client: {
              clientId: '1234567890',
              name: 'Асена Пенчева',
            },
            vehicle: {
              chassis: '1234',
              registrationNumber: 'СА1234СА',
              brand: 'VW',
              model: 'GOLF'
            }
          },
          {
            status: 'offer',
            startDate: Date.now(),
            endDate: Date.UTC(2018, 12, 29),
            totalPayment: 200,
            paymentsCount: 4,
            insuranceCompany: 'Лев Инс',
            client: {
              clientId: '9876543210',
              name: 'Иван Иванов',
            },
            vehicle: {
              chassis: '5678',
              registrationNumber: 'СА5678СА',
              brand: 'VW',
              model: 'PASSAT'
            },
            // insuranceType: 2,
            // insuranceObject: { test: "testObject" }
          }
        ]
      }
    ];
    return { users, clients, vehicles, insurances };
  }
}

