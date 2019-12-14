import { trigger, transition, animate, style, query, group, animateChild } from '@angular/animations';

export const sidebarAnimation = trigger('sidebar', [
  transition('* => sidebar', [

  ]),

  transition('sidebar => *', [
    style({
      backgroundColor: 'white',
      opacity: 0
    }),
    animate('0.3s ease-out')
  ])
]);
