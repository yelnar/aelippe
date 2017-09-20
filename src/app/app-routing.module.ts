/**
 * Yelnar Nauryzbayev
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TranslatorComponent } from './translator/translator.component';
import { AboutComponent } from './about/about.component';

const routes = [
  {
    path: '',
    component: TranslatorComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
