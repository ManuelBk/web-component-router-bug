import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {createCustomElement} from '@angular/elements';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {Overview1Component} from './Components/overview1/overview1.component';
import {Detail1Component} from './Components/detail1/detail1.component';
import {Detail2Component} from './Components/detail2/detail2.component';
import {Overview2Component} from './Components/overview2/overview2.component';
import {EmptyComponent} from './Components/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    Overview1Component,
    Overview2Component,
    Detail1Component,
    Detail2Component,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  /**
   * Creating a WebComponent from AppComponent
   */
  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('web-component', el);
  }
}
