import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IUser } from '../../models/interfaces/user';
import { DataUserService } from "../../data/user/data-user.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class UserService implements CanActivate {

  isUserLoggedIn: boolean = false;
  loggedInUser: IUser;
  userChange: Subject<IUser> = new Subject<IUser>();
  
  constructor(private router: Router, private httpService: DataUserService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.verifyLogin(url);

  }

  verifyLogin(url: string): boolean {
    if (this.isUserLoggedIn) {
      return true;
    }

    this.router.navigate(['/auth/login']);
    return false;
  }

  change()
  {
    this.userChange.next(this.loggedInUser);
  }

  register(username: string, password: string) {
    return this.httpService.createUser(username, password, '', '', '', '')
      .then((user) => {
        this.loggedInUser = user;
        this.isUserLoggedIn = true;
        this.change();
        this.router.navigate(['/home']);
        return user;
      })
      .catch(console.log);
  }

  login(loginUsername: string, loginPassword: string) {
    return this.httpService.getUserByUsername(loginUsername).then((user) => {
      if (!user[0]) {
        return;
      }
      if (user[0].password !== loginPassword) {
        return;
      }
      this.isUserLoggedIn = true;
      this.loggedInUser = user[0];
      this.change();
      this.router.navigate(['/home']);
      return user[0] as IUser;
    })
      .catch(console.log);
  }

  getCurrentUser(): IUser {
    return this.loggedInUser;
  }

  logout() {
    this.isUserLoggedIn = false;
    this.loggedInUser = null;
    this.change();
  }
}
