import { IInsurance } from "./insurance";

export interface IUser {
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    telephone: string,
    isAdmin: boolean,
    insurances: IInsurance[]
}