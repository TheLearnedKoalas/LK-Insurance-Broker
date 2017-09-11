import { Client } from './client';
import { Vehicle } from './vehicle';
import { IUser } from '../../models/interfaces/user';

export class ThirdPartInsurance {
    constructor(public client: Client, public vehicle: Vehicle, public user: IUser ) {
        this.status = 'offer';
        this.insuranceId = ThirdPartInsurance.idGenerator();
    }
    insuranceId: string; // idGenerator
    number: number;
    public status: string; // enum
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
