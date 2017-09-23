import { trigger, state, animate, transition, style } from '@angular/animations';

export const flyUpAnimation =
  trigger('flyUpAnimation', [

    state('inactive', style({
      opacity: 0
    })),

    state('active', style({
      opacity: 1
    })),

    transition('inactive => active', [
      animate('2s ease-in-out')
    ]),

    transition('active => inactive', [
      animate('2s ease-in-out')
    ])
  ]);
