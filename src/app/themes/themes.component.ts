import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemesEnum } from './shared/constants/themes.enum';
import { ThemeModel } from './shared/models/theme.model';
import { ThemesService } from './shared/services/themes.service';

@Component({
    selector: 'app-themes',
    templateUrl: './themes.component.html',
    styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

    constructor(private router: Router, private themesService: ThemesService) { }

    ngOnInit(): void {
        const themeId = this.router.url.split('/')[2]; // url = /themes/themeId
        const theme: ThemeModel = ThemesEnum.get(themeId)!;
        this.themesService.emitThemeActive(theme);
    }
}
