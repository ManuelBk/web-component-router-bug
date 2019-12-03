import {Component, OnInit} from '@angular/core';

/**
 * This Empty Component is a placeholder, when the Router did not know where to navigate,
 * usually this will occur, when the Container Router should resolve the URL.
 */
@Component({
    template: '<p style="background-color: transparent;" class="text-muted">{{loadingText}}</p>'
})
export class EmptyComponent implements OnInit {

    public loadingText = 'Loading...';

    /**
     * After a certain amount of time indicate, that there is no loading anymore.
     */
    public ngOnInit() {
        const interval = setInterval(() => {
            this.loadingText = 'No Data available!';
            clearInterval(interval);
        }, 10000);
    }
}
