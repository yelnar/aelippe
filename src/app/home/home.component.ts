/**
 * Yelnar Nauryzbayev
 */

import { Component, HostBinding, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { TranslateService } from '@ngx-translate/core';

import { AppService } from './../app.service';

import { slideInOut } from './slide-in-out.animation';
import { fadeInAnimation } from './fade-in-out.animation';
import { fadeInAndOut } from './fade-in-and-out.animation';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    slideInOut,
    fadeInAnimation,
    fadeInAndOut
  ]
})

export class HomeComponent implements OnInit {
  MAX_LENGTH = 5000;
  translation: Observable<string>;
  focused: boolean;
  inputModel: string;
  isCopied = 0;
  state = 'inactive';
  languages = ['kz', 'ru', 'en'];
  curLang = 0;
  private subject = new Subject<string>();

  constructor(
    private appService: AppService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use(this.languages[this.curLang]);
  }

  ngOnInit(): void {
    this.focused = false;
    this.translation = this.subject
      .debounceTime(100)
      .distinctUntilChanged()
      .switchMap(text => text
        ? this.appService.translate(text)
        : Observable.of('')
      )
      .catch(error => {
        return Observable.of(error);
      });
  }

  onTextChanged(text: string): void {
    this.subject.next(text.slice(0, this.MAX_LENGTH));
  }

  onBlur(): void {
    this.focused = false;
  }

  onFocus(): void {
    this.focused = true;
  }

  clear() {
    this.subject.next('');
  }

  toggleState() {
    this.state === 'active' ? this.state = 'inactive' : this.state = 'active';
  }

  getState() {
    return this.state === 'active' ? 'inactive' : 'active';
  }

  copied() {
    this.isCopied = 1;
    setTimeout(() => {
      this.isCopied = 0;
    }, 500);
  }

  changeLanguage() {
    // const locale = this.locales[]
    this.curLang = (++this.curLang) % 3;
    this.translate.use(this.languages[this.curLang]);
  }
}
