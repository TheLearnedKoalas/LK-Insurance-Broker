import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate {

  userLoggedIn: boolean = false;
  loggedInUser: string;
  authUser: any;

  constructor(private router: Router) {
    firebase.initializeApp({
      apiKey: "AIzaSyAoCA32m0RfhReqLpmL3IOPnHLsaOOrGRk",
      authDomain: "lk-insurance-broker.firebaseapp.com",
      databaseURL: "https://lk-insurance-broker.firebaseio.com",
      projectId: "lk-insurance-broker",
      storageBucket: "lk-insurance-broker.appspot.com",
      messagingSenderId: "974569024812"
    });
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.verifyLogin(url);

  }

  verifyLogin(url: string): boolean {
    if (this.userLoggedIn) {
      return true;
    }

    this.router.navigate(['/auth/login']);
    return false;
  }

  register(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        alert(`${err.message}`)
      })
  }

  verifyUser() {
    this.authUser = firebase.auth().currentUser;

    if (this.authUser) {
      alert(`Login success! ${this.authUser.email}`)
      this.userLoggedIn = true;
      this.router.navigate(['/auth']);
    }
  }

  login(loginEmail: string, loginPassword: string) {
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
      .catch((err) => {
        alert(`${err.message}`);
      })
  }

  logout() {
    this.userLoggedIn = false;
    firebase.auth().signOut()
      .then(() => { alert(`Logged out!`); })
      .catch((err) => { alert(`${err.message}`); });
  }
}
