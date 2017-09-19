/**
 * Yelnar Nauryzbayev
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule,
    ClipboardModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
