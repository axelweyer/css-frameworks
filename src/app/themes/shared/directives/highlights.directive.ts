import { Directive, ElementRef } from "@angular/core";
import * as hljs from 'highlight.js';

@Directive({
    selector: 'code[highlight]'
  })
  export class HighlightCodeDirective {
    constructor(private eltRef:ElementRef) {
    }
  
    ngAfterViewInit() {
      hljs.highlightBlock(this.eltRef.nativeElement);
    }
  }