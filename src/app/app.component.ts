/**
 * Yelnar Nauryzbayev
 */

import {Component, HostBinding, OnInit} from '@angular/core';

import { fadeInAnimation } from './translator/fade-in-out.animation';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation]
})
export class AppComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
  }

  @HostBinding('@fadeInAnimation')
  public get childRouteTransition() {
    return this.activatedRoute.snapshot;
  }
}
