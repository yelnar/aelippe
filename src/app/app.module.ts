/**
 * Yelnar Nauryzbayev
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator/translator.component';
import { AboutComponent } from './about/about.component';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule,
    ClipboardModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
