import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitch-comp',
  templateUrl: './lightswitch-comp.component.html',
  styleUrls: ['./lightswitch-comp.component.scss']
})
export class LightswitchCompComponent {

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
