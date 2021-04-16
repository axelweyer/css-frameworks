import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeComponentComponent } from 'src/app/themes/shared/models/theme-component.component';
import { PuraButtonsContent } from './pura-buttons.content';

@Component({
  selector: 'app-pura-buttons',
  templateUrl: './pura-buttons.component.html',
  styleUrls: ['./pura-buttons.component.scss']
})
export class PuraButtonsComponent extends ThemeComponentComponent implements OnInit {

  constructor(protected sanitizer: DomSanitizer) {
      super(sanitizer);
      this.initContent(PuraButtonsContent);
      console.log();
  }

  ngOnInit(): void {
  }

}
