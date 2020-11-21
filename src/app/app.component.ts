import { Component } from '@angular/core';

@Component({
  selector: 'cpa-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="content">
      <h1>Welcome to {{ title }}!</h1>
      <cpa-force-list></cpa-force-list>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Crime-Project';
}
