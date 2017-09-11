import { IsLength } from 'validator.ts/decorator/Validation';
import { Client } from './client';

export class Company implements Client {
    private _clientId: string;
    @IsLength(2, 30)
    private _name: string;
    constructor(_clientId: string, name: string, public adress: string) {
        this.clientType = 'юридическо лице';
    }
    public clientType: string; // enum
    set name(value) {
        this._name = value;
    } get name() {
        return this._name;
    }
    get clientId() {
        return this._clientId;
    }
    contacts: { phone: string; email: string; };
}
