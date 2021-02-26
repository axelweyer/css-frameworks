import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemesEnum } from './shared/constants/themes.enum';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  public themeDirective: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeSub = this.route.params.subscribe((params: Params) => {
        const themeId = params.themeId;
        this.themeDirective = ThemesEnum.get(themeId);
    });
    this.subscription.add(routeSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
