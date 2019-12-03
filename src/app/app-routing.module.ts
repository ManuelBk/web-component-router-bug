import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmptyComponent} from './Components/empty/empty.component';
import {Overview1Component} from './Components/overview1/overview1.component';
import {Detail1Component} from './Components/detail1/detail1.component';
import {Overview2Component} from './Components/overview2/overview2.component';
import {Detail2Component} from './Components/detail2/detail2.component';

const routes: Routes = [
  {
    path: 'route1', component: Overview1Component, children: [
      {path: 'detail', component: Detail1Component}
    ]
  }, {
    path: 'route2', component: Overview2Component, children: [
      {path: 'detail', component: Detail2Component}
    ]
  },
  {path: '**', component: EmptyComponent}
  // If the WebComponent is displayed, but no route matches the Empty Component will be shown.
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
