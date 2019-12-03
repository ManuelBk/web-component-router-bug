import {Component} from '@angular/core';

@Component({
  selector: 'app-detail-1-component',
  templateUrl: './detail1.component.html'
})
export class Detail1Component {
  title = 'Detail1';

  timestamp: number;

  constructor() {
    this.timestamp = Date.now();
    console.log('Constructed Detail1Component with timestamp: ' + this.timestamp);
  }

  ngOnInit(): void {
    console.log('OnInit for Detail1Component with construction timestamp: ' + this.timestamp);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy for Detail1Component with construction timestamp: ' + this.timestamp);
  }
}
