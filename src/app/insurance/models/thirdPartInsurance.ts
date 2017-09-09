import { Client } from './client';
import { Vehicle } from './vehicle';

export class ThirdPartInsurance {
    constructor(public client: Client, public vehicle: Vehicle) {
    }
    status: string;//enum
    public startDate: Date;
    public endDate: Date;
    public totalPayment: number;
    public paymentsCount: number;
    public payments: {
        status: string,
        paymentDate: Date,
        payedDate: Date,
        payment: number
    };
}
