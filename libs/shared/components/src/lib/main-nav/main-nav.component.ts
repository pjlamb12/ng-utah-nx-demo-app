import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-utah-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  @Input() appName: string;
  @Input() links: any[];
  constructor() {}

  ngOnInit(): void {}
}
