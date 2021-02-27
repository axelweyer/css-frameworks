import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes.component';
import { ThemeDirective } from './shared/directives/theme.directive';
import { ThemesRoutingModule } from './themes-routing.module';
import { PuraComponent } from './list/pura/pura.component';
import { ThemeMenuComponent } from './theme-menu/theme-menu.component';

@NgModule({
  declarations: [
    ThemesComponent,
    ThemeDirective,
    PuraComponent,
    ThemeMenuComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule
  ],
  entryComponents: [
    PuraComponent
  ],
  exports: [ThemeDirective]
})
export class ThemesModule { }
