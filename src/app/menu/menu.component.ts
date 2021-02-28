import { Component, OnInit } from '@angular/core';
import { ThemesEnum } from '../themes/shared/constants/themes.enum';
import { ThemeModel } from '../themes/shared/models/theme.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public themes: Map<string, ThemeModel>;

  constructor() {
    this.themes = ThemesEnum;
  }

  ngOnInit(): void {
  }

  public selectTheme(theme: ThemeModel): void {
      console.log(theme);
  }
}
