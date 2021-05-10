import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeComponentComponent } from 'src/app/themes/shared/models/theme-component.component';
import { PuraLinksContent } from './pura-links.content';

@Component({
  selector: 'app-pura-links',
  templateUrl: './pura-links.component.html',
  styleUrls: ['./pura-links.component.scss']
})
export class PuraLinksComponent extends ThemeComponentComponent implements OnInit {

  constructor(protected sanitizer: DomSanitizer) {
      super(sanitizer);
      this.initContent(PuraLinksContent);
      console.log();
  }

  ngOnInit(): void {
  }

}
