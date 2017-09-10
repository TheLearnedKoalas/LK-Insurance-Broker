import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { IUser } from '../../models/interfaces/user';

@Injectable()
export class DataUserService {
  private usersUrl = 'api/users';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
  }

  private handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.message || error);
  }

  getUsers(): Promise<IUser[]> {
    return this.http.get(this.usersUrl).toPromise()
      .then((res) => res.json().data as IUser[])
      .catch(this.handleError);
  }

  getUserById(id: number): Promise<IUser> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then((res) => res.json().data as IUser)
      .catch(this.handleError);
  }

  getUserByUsername(username: string): Promise<IUser> {
    const url = `${this.usersUrl}?username=${username}`;
    return this.http.get(url)
      .toPromise()
      .then((res) => res.json().data as IUser)
      .catch(this.handleError);
  }

  updateUser(user: IUser): Promise<IUser> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  createUser(username: string, password: string, firstName: string, lastName: string, email: string, telephone: string): Promise<IUser> {
    let currentUser = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      telephone: telephone,
      isAdmin: false,
      insurances: []
    }

    return this.http.post(this.usersUrl, JSON.stringify(currentUser), { headers: this.headers })
      .toPromise()
      .then((res) => res.json().data as IUser)
      .catch(this.handleError);
  }

  deleteUser(user: IUser | number): Promise<void> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
