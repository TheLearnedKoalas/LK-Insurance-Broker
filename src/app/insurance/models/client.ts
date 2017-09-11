// import { Validator } from 'validator.ts/Validator';
// import { IsLength } from 'validator.ts/decorator/Validation';
export interface Client {
    clientType: string;
    clientId: string;
    name: string;
    adress: string;
    contacts: { phone: string, email: string };
}



