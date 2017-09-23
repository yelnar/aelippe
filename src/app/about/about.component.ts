/**
 * Yelnar Nauryzbayev
 */

import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

import { flyUpAnimation } from './fly-up.animation';

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
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.state);
  }

  close() {
    console.log(this.state);
    this.toogleState.next();
  }

  done() {
    console.log('done');
    console.log(this.state);
  }
}

