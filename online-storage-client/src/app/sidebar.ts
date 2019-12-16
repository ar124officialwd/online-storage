import { Router } from '@angular/router';

export abstract class Sidebar {
  constructor(private router: Router) {}

  closeModel() {
    return this.router.navigate([{ outlets: {sidebar: null}}]);
  }

  abstract openHelp();
}
