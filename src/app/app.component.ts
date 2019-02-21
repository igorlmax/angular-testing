import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    isOn = false;

    constructor() { }

    clicked() {
        this.isOn = !this.isOn;
    }

    get message() {
        // Check isOn property, if TRUE write string 'On' otherwise 'Off'
        return `The light is ${this.isOn ? 'On' : 'Off'}`;
    }
}
