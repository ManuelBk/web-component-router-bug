import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail-2-component',
  templateUrl: './detail2.component.html'
})
export class Detail2Component implements OnInit, OnDestroy {
  title = 'Detail2';

  timestamp: number;

  constructor() {
    this.timestamp = Date.now();
    console.log('Constructed Detail2Component with timestamp: ' + this.timestamp);
  }

  ngOnInit(): void {
    console.log('OnInit for Detail2Component with construction timestamp: ' + this.timestamp);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy for Detail2Component with construction timestamp: ' + this.timestamp);
  }
}
