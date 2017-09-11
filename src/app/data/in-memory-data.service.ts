import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { InsuranceType } from "../models/enums/insuranceType";

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const clients = [
      {
        id: '1234567890',
        clientType: 'физическо лице',
        name: 'Асена Пенчева',
        adress: 'адрес'
      },
      {
        id: '9876543210',
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
        id: '1234567890',
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
      id: '12345asdd',
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
        id: '9876543210',
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
      id: '12345asdd',
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
<<<<<<< HEAD
            number: '12345',
            status: 'policy',
            startDate: Date.now(),
            endDate: Date.UTC(2018, 12, 29),
            totalPayment: 200,
            paymentsCount: 4,
            insuranceCompany: 'Лев Инс',
            client: {
              id: '1234567890',
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
              id: '9876543210',
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
=======
            startingDate: Date.now(),
            endingDate: Date.UTC(2018, 12, 29),
            price: 100,
            insuranceType: 2 as InsuranceType,
            insuranceObject: { signature: "testObject" }
>>>>>>> feature/user-insurances
          }
        ]
      }
    ];
    return { users, clients, vehicles, insurances };
  }
}

