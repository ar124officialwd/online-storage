import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { notificationAnimation } from '../animations/notification.animation';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [
    notificationAnimation
  ]
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  faWindowClose = faWindowClose;

  constructor(private ns: NotificationService,
              private router: Router) {
  }

  ngOnInit() {
    this.ns.addEvent
      .subscribe((notification => {
        this.notifications.push(notification);
      }));

    this.ns.removeEvent
      .subscribe((notification => {
        const index = this.notifications.findIndex(n => {
          return n.id === notification.id;
        });
        this.notifications.splice(index, 1);
      }));
  }

  removeNotification(id) {
    this.ns.removeById(id);
  }
}
