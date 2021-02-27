import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes.component';
import { ThemeDirective } from './shared/directives/theme.directive';
import { ThemesRoutingModule } from './themes-routing.module';
import { PuraComponent } from './list/pura/pura.component';
import { ThemeCategoriesComponent } from './theme-categories/theme-categories.component';
import { PuraButtonsComponent } from './list/pura/components/pura-buttons/pura-buttons.component';

@NgModule({
  declarations: [
    ThemesComponent,
    ThemeDirective,
    ThemeCategoriesComponent,
    PuraComponent,
    PuraButtonsComponent
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
