import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeComponentComponent } from 'src/app/themes/shared/models/theme-component.component';
import { PuraTitlesContent } from './pura-titles.content';

@Component({
  selector: 'app-pura-titles',
  templateUrl: './pura-titles.component.html',
  styleUrls: ['./pura-titles.component.scss']
})
export class PuraTitlesComponent extends ThemeComponentComponent implements OnInit {

  constructor(protected sanitizer: DomSanitizer) {
      super(sanitizer);
      this.initContent(PuraTitlesContent);
      console.log();
  }

  ngOnInit(): void {
  }

}
