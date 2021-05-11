import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeComponentComponent } from 'src/app/themes/shared/models/theme-component.component';
import { PuraColorsContent } from './pura-colors.content';

@Component({
  selector: 'app-pura-colors',
  templateUrl: './pura-colors.component.html',
  styleUrls: ['./pura-colors.component.scss']
})
export class PuraColorsComponent extends ThemeComponentComponent implements OnInit {

  constructor(protected sanitizer: DomSanitizer) {
      super(sanitizer);
      this.initContent(PuraColorsContent);
      console.log();
  }

  ngOnInit(): void {
  }

}
