import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemesEnum } from './shared/constants/themes.enum';
import { ThemeModel } from './shared/models/theme.model';
import { ThemesService } from './shared/services/themes.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  public themeDirective: any;

  constructor(private route: ActivatedRoute, private themesService: ThemesService) { }

  ngOnInit(): void {
    const routeSub = this.route.params.subscribe((params: Params) => {
      const themeId = params.themeId;
      const theme: ThemeModel = ThemesEnum.get(themeId)!;
      this.themesService.emitThemeActive(theme);
    });
    this.subscription.add(routeSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
