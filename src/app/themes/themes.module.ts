import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes.component';
import { ThemeDirective } from './shared/directives/theme.directive';
import { ThemesRoutingModule } from './themes-routing.module';
import { PuraComponent } from './list/pura/pura.component';

@NgModule({
  declarations: [
    ThemesComponent,
    ThemeDirective,
    PuraComponent
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
