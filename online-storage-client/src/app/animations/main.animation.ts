import { trigger, transition, query, style, animateChild, group, animate } from '@angular/animations';

export const mainAnimation = [
  trigger('main', [
    transition('user-panel <=> open-media', [
      style({
        position: 'relative',
        top: 0,
        left: 0
      }),

      query(':enter', [
        style({
          position: 'absolute',
          top: '-100%',
          left: 0
        })
      ], {
        optional: true
      }),

      query(':enter', animateChild(), {
        optional: true
      }),

      group([
        query(':enter', [
          animate('0.3s ease-in', style({top: 0}))
        ], {
          optional: true
        }),

        query(':leave', [
          animate('0.3s ease-out', style({opacity: 0}))
        ], {
          optional: true
        }),
      ]),

      query(':leave', animateChild(), {
        optional: true
      }),
    ])
  ])
];
