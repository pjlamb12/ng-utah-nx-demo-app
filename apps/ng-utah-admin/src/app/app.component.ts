import { Component } from '@angular/core';

@Component({
  selector: 'ng-utah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-utah-admin';
  links = [{ url: '/', display: 'Home' }];
}
