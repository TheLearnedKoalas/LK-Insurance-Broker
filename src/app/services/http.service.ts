import { Injectable } from '@angular/core';
@Injectable()
export class HTTPService {
    save(url: string, data: any): any {
        // if you don't return anything, how the consumer will know it's a promise?
        return window.fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // do you really need to store the response into the service?
        // .then((response: any) => {
        //    this.response = response;
        //    return Promise.resolve(this.response);
        // })
        .catch((error) => {
            console.log(error.message);
            // if you return error.message here, the consumer won't know there is a problem
            // you need to rethrow the error so it can be catched by the consumer
            throw error;
        });
    }
}
