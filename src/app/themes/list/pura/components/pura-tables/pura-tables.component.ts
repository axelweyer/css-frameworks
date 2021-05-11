import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeComponentComponent } from 'src/app/themes/shared/models/theme-component.component';
import { PuraTablesContent } from './pura-tables.content';

@Component({
  selector: 'app-pura-tables',
  templateUrl: './pura-tables.component.html',
  styleUrls: ['./pura-tables.component.scss']
})
export class PuraTablesComponent extends ThemeComponentComponent implements OnInit {

  constructor(protected sanitizer: DomSanitizer) {
      super(sanitizer);
      this.initContent(PuraTablesContent);
  }

  ngOnInit(): void {
  }

}
