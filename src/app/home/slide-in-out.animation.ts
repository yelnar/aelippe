import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOut =
  trigger('slideInOut', [

    state('inactive', style({
      // opacity: 0,
      height: '0%',
      width: '100%',
      display: 'none',
      position: 'absolute',
      bottom: 0,
      left: 0
    })),
    state('active', style({
      // opacity: 1,
      height: '100%',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0
    })),

    transition('inactive => active', [
      style({
        // opacity: 0,
        height: '0%',
        display: 'none'
      }),

      animate('0.4s ease-in-out', style({
        // opacity: 1,
        height: '100%',
        display: 'block'
      }))
    ]),

    transition('active => inactive', [
      style({
        // opacity: 1,
        height: '100%',
        display: 'block'
      }),

      animate('0.4s ease-in-out', style({
        // opacity: 0,
        height: '0%',
        display: 'none'
      }))
    ])
  ]);
