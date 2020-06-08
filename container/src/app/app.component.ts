import { Component } from '@angular/core';

@Component({
  selector: 'slb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    window.System.import('ng.core');
  }
}
