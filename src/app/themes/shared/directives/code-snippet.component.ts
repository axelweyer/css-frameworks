import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeComponentComponent } from 'src/app/themes/shared/models/theme-component.component';
import { PuraButtonsContent } from './pura-buttons.content';

@Component({
  selector: 'app-code-snippet',
  template: `{{ code }}
  <pre><code [highlight]="code"></code></pre>`,
})
export class CodeSnippetComponent {

    @Input() code: any;

  constructor() { }
}
