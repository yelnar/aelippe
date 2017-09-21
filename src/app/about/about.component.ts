/**
 * Yelnar Nauryzbayev
 */

import { Component, HostBinding, OnInit } from '@angular/core';

import { slideInOutAnimation } from './slide-in-out.animation';
import { ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slideInOutAnimation]
})

export class AboutComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
  }

  @HostBinding('@slideInOutAnimation')
  public get childRouteTransition() {
    return this.activatedRoute.snapshot;
  }

}
