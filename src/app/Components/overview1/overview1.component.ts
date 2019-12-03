import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview-1-component',
  templateUrl: './overview1.component.html'
})
export class Overview1Component {
  title = 'Overview1';

  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigate(['/route1/detail']);
  }
}
