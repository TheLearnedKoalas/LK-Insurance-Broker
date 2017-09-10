import { Client } from './client';
import { Vehicle } from './vehicle';

export class ThirdPartInsurance {
    constructor(public client: Client, public vehicle: Vehicle, public user: string) { // user:User
        this.status = 'offer';
        this.id = ThirdPartInsurance.idGenerator();
    }
    id: string; // idGenerator
    number: number;
    status: string; // enum
    public startDate: Date;
    public endDate: Date;
    public totalPayment: number;
    public paymentsCount: number;
    public insuranceCompany: string;
    public payments: {
        //    id: number,
        status: string,
        paymentDate: Date,
        payedDate: Date,
        payment: number
    };

    private static idGenerator() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}
