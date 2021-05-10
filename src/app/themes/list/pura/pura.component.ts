import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeComponent } from '../../shared/models/theme.component';
import { ThemesService } from '../../shared/services/themes.service';

@Component({
    selector: 'app-pura',
    templateUrl: './pura.component.html',
    styleUrls: ['./pura.component.scss']
})
export class PuraComponent extends ThemeComponent implements OnInit {
  
    constructor(protected themesService: ThemesService, protected viewportScroller: ViewportScroller) {
        super(themesService, viewportScroller);
    }
  
    ngOnInit(): void {
        super.ngOnInit();
    }
}
