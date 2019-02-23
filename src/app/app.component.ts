import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing';
  user: any;
  isAuthenticated: false;
  isAuthorized: false;

    /**
     *
     * @param user
     */
    login(user): void {
        this.user = user;
    }

    /**
     *
     * @return {boolean}
     */
    logout(): boolean {
        this.user = false:
        this.isAuthenticated = false;
    }

    /**
     *
     * @param user
     */
    logout(user): void{
        this.user = user;
    }

    /**
     *
     * @param user
     * @return {boolean}
     */
    create(user): boolean{
      this.isAuthenticated = true;
      return true;
    }
}
