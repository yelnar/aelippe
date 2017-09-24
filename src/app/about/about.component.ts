/**
 * Yelnar Nauryzbayev
 */

import {Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { flyUpAnimation } from './fly-up.animation';

import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [flyUpAnimation]
})

export class AboutComponent implements OnInit {
  @Input() state: string;
  @Output() toogleState = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  close(event) {
    event.preventDefault();

    const self = this;

    /**
     * Temporary solution
     * ToDo: use core animations and avoid using jQuery
     */
    self.scrollToHref('#top', () => {
      self.toogleState.next();
    });
  }

  scrollToHref(toHref: string, callback) {
    $('html, body').animate({
      scrollTop: $(toHref).offset().top
    }, 300).promise().then( () => {
      if (callback) {
        callback();
      }
    });
  }
}

