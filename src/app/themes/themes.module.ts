import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes.component';
import { ThemeDirective } from './shared/directives/theme.directive';
import { ThemesRoutingModule } from './themes-routing.module';
import { PuraComponent } from './list/pura/pura.component';
import { ThemeCategoriesComponent } from './theme-categories/theme-categories.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
    declarations: [
        ThemesComponent,
        ThemeDirective,
        ThemeCategoriesComponent,
    ],
    imports: [
        CommonModule,
        ThemesRoutingModule,
        HighlightModule
    ],
    entryComponents: [
        PuraComponent
    ],
    bootstrap: [ThemesComponent],
    exports: [ThemeDirective],
    providers: [
        {
          provide: HIGHLIGHT_OPTIONS,
          useValue: {
            fullLibraryLoader: () => import('highlight.js'),
          }
        }
      ]
})
export class ThemesModule { }
