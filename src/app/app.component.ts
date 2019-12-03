import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'web-component';

  /**
   * Getting an external changed state as attribute and navigating to the desired location.
   * @param state
   */
  @Input('state')
  set state(state: string) {
    this.router.navigate([state.split('?')[0]], {
      skipLocationChange: true
    });
  }

  constructor(private router: Router) {
    this.router.setUpLocationChangeListener();
  }
}
