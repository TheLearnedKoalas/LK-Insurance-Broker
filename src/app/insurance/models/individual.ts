import { IsLength } from 'validator.ts/decorator/Validation';
import { Client } from './client';

export class Individual implements Client {
    @IsLength(10, 10)
    private _id: string;
    @IsLength(2, 50)
    private _name: string;
    constructor(_id: string, name: string, public adress: string) {
        this.clientType = 'физическо лице';
    }
    public clientType: string; // enum
    set name(value) {
        this._name = value;
    } get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    contacts: { phone: string; email: string; };
}
