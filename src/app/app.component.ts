/**
 * Yelnar Nauryzbayev
 */

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  MAX_LENGTH = 5000;
  translation: Observable<string>;
  focused: boolean;
  inputModel: string;
  private subject = new Subject<string>();

  constructor(
    private appService: AppService
  ) {}

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
        console.error(error);
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
}
