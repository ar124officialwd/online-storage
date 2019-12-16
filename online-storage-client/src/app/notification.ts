import * as ShortId from 'shortid';

export class Notification {
  id: string;
  title: string;
  message: string;

  constructor() {
    this.id = ShortId.generate();
  }
}
