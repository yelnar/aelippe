import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAndOut =
  trigger('fadeInAndOut', [
    state('1' , style({ opacity: 1 })),
    state('0', style({ opacity: 0 })),
    transition('1 => 0', animate('500ms')),
    transition('0 => 1', animate('500ms'))
  ]);
