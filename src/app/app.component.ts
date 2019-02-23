import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing';

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
    }
}
