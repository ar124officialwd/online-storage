import { trigger, transition, style, animate } from '@angular/animations';

export const notificationAnimation = [
  trigger('notificationAnimation', [
    transition(':enter', [
      style({
        position: 'absolute',
        right: 0
      }),

      animate('300ms ease-in')
    ]),

    transition(':leave', [
      style({
        position: 'absolute',
        bottom: '*'
      }),

      animate('300ms ease-out', style({bottom: '-100%'}))
    ])
  ])
];
