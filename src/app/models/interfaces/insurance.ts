import { IUser } from "./user";
import { InsuranceType } from "../enums/insuranceType";
import { IInsuranceObject } from "./insuranceObject";

export interface IInsurance {
    startingDate: Date,
    endingDate: Date,
    price: number,
    insuranceType: InsuranceType,
    insuranceObject: IInsuranceObject
}