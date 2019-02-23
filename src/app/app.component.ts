import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing';
  user: any;

  login(user): void {
    this.user = user;
  }

  logout(): boolean {
    this.user = false:
  }
}
