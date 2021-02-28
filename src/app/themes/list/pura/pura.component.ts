import { Component, OnInit } from '@angular/core';
import { ThemeComponent } from '../../shared/models/theme.component';
import { ThemesService } from '../../shared/services/themes.service';

@Component({
    selector: 'app-pura',
    templateUrl: './pura.component.html',
    styleUrls: ['./pura.component.scss']
})
export class PuraComponent extends ThemeComponent implements OnInit {
  
    constructor(protected themesService: ThemesService) {
        super(themesService);
    }
  
    ngOnInit(): void {
        super.ngOnInit();
    }
}
