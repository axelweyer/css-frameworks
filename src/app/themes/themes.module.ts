import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes.component';
import { TestComponent } from './list/test/test.component';
import { ThemeDirective } from './shared/directives/theme.directive';
import { ThemesRoutingModule } from './themes-routing.module';

@NgModule({
  declarations: [
    ThemesComponent,
    ThemeDirective
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule
  ],
  entryComponents: [
    TestComponent
  ],
  exports: [ThemeDirective]
})
export class ThemesModule { }
