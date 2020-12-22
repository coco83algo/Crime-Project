import { Component } from '@angular/core';

@Component({
  selector: 'cpa-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Title of the app.');
  }
}
