import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeComponentComponent } from 'src/app/themes/shared/models/theme-component.component';
import { PuraChipsContent } from './pura-chips.content';

@Component({
  selector: 'app-pura-chips',
  templateUrl: './pura-chips.component.html',
  styleUrls: ['./pura-chips.component.scss']
})
export class PuraChipsComponent extends ThemeComponentComponent implements OnInit {

  constructor(protected sanitizer: DomSanitizer) {
      super(sanitizer);
      this.initContent(PuraChipsContent);
      console.log();
  }

  ngOnInit(): void {
  }

}
