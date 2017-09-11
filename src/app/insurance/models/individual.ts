import { IsLength } from 'validator.ts/decorator/Validation';
import { Client } from './client';

export class Individual implements Client {
    // private _clientId: string;
    // @IsLength(2, 50)
    // private _name: string;
    constructor(public clientId: string, public name: string, public adress: string) {
        this.clientType = 'физическо лице';
    }
    public clientType: string; // enum
    // set name(value) {
    //     this._name = value;
    // } get name() {
    //     return this._name;
    // }
    // get clientId() {
    //     return this._clientId;
    // }
    contacts: { phone: string; email: string; };
}
