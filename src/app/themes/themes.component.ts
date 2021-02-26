import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeComponent } from './shared/constants/theme.component';
import { ThemeDirective } from './shared/directives/theme.directive';
import { TestComponent } from './list/test/test.component';
import { ThemesEnum } from './shared/constants/themes.enum';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  public themeDirective: any;

  constructor(private route: ActivatedRoute, private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    const routeSub = this.route.params.subscribe((params: Params) => {
        const themeId = params.themeId;
        console.log(params)
        console.log(themeId)
        console.log(ThemesEnum)
        this.themeDirective = ThemesEnum.get(themeId);
        console.log(this.themeDirective);
    });
    this.subscription.add(routeSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
