import { IUser } from "./user";
import { InsuranceType } from "../enums/insuranceType";
import { IInsuranceObject } from "./insuranceObject";

export interface IInsurance {
    number: number,
    status: string,
    startDate: Date,
    endDate: Date,
    totalPayment: number,
    paymentsCount: number,
    insuranceCompany: string,
    client: {
    },
    vehicle: {
    }
}