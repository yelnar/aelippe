import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    state('active' , style({ opacity: 1, transform: 'scale(1.0)' })),
    state('inactive', style({ opacity: 0.5, transform: 'scale(0.9)'  })),
    transition('active => inactive', animate('400ms')),
    transition('inactive => active', animate('400ms'))
  ]);
