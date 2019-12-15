import { trigger, transition, animate, style, query, group, animateChild } from '@angular/animations';

export const sidebarAnimation = [
  trigger('sidebar', [
    transition('* <=> *', [
      style({
        position: 'relative'
      }),

      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], {
        optional: true
      }),

      query(':enter', [
        style({
          left: '-100%'
        })
      ], {
        optional: true
      }),

      query(':leave', animateChild(), {
        optional: true
      }),

      group([
        query(':enter', [
          animate('500ms ease-in', style({
            left: '0%'
          }))
        ], {
          optional: true
        }),

        query(':leave', [
          animate('500ms ease-out', style({
            opacity: 0
          }))
        ], {
          optional: true
        }),
      ]),

      query(':leave', animateChild(), {
        optional: true
      })
    ])
  ])
];
