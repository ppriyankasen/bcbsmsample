import { Injectable, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SafeService {
  public sanitizer = inject(DomSanitizer);

  constructor() { }

  public safeHtml(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
