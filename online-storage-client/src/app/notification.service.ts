import { Injectable } from '@angular/core';
import { Notification } from './notification';
import { from, Subject, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = [];
  addEvent = new ReplaySubject<Notification>();
  removeEvent = new Subject<Notification>();

  constructor(private router: Router) {
  }

  add(title: string, message: string, expiresInSeconds: number = null) {
    const noti = new Notification();
    noti.title = title;
    noti.message = message;
    this.notifications.push(noti);
    this.addEvent.next(noti);

    this.router.navigate([{ outlets: {notification: 'notification'}}]);

    if (expiresInSeconds > 0) {
      setTimeout(() => {
        this.removeById(noti.id);
      }, expiresInSeconds * 1000);
    }
  }

  /* get notifications */
  getNotifications() {
    return from(this.notifications);
  }

  /* remove a notification */
  removeById(notificationId) {
    const index = this.notifications.findIndex(n => {
      return notificationId === n.id;
    });
    this.notifications.splice(index, 1);

    if (this.notifications.length <= 0) {
      this.addEvent = new ReplaySubject();
      this.router.navigate([{ outlets: {notification: null}}]);
    }

    this.removeEvent.next(notificationId);
  }
}
