import { IsLength } from 'validator.ts/decorator/Validation';

export class Company implements Client {
    @IsLength(9, 9)
    private _id: string;
    @IsLength(2, 30)
    private _name: string;
    constructor(_id: string, name: string, public adress: string, public contacts: { phone: string, email: string }) {
    }
    set name(value) {
        this._name = value;
    } get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
}