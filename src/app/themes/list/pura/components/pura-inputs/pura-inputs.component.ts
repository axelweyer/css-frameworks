import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeComponentComponent } from 'src/app/themes/shared/models/theme-component.component';
import { PuraInputsContent } from './pura-inputs.content';

@Component({
  selector: 'app-pura-inputs',
  templateUrl: './pura-inputs.component.html',
  styleUrls: ['./pura-inputs.component.scss']
})
export class PuraInputsComponent extends ThemeComponentComponent implements OnInit {

  constructor(protected sanitizer: DomSanitizer) {
      super(sanitizer);
      this.initContent(PuraInputsContent);
      console.log();
  }

  ngOnInit(): void {
  }

}
