import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview-2-component',
  templateUrl: './overview2.component.html'
})
export class Overview2Component {
  title = 'Overview2';

  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigate(['/route2/detail']);
  }
}
