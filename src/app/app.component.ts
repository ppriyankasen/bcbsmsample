import { Component, inject } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { SafeService } from './safe.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  sanitizer = inject(DomSanitizer);
  public labelText = '<b>Test</b><br />Line 2';

  constructor(
    public safeHtmlService: SafeService
  ) {

  }

}
