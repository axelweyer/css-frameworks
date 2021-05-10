import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuraComponent } from './pura.component';
import { PuraButtonsComponent } from './components/pura-buttons/pura-buttons.component';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { PuraLinksComponent } from './components/pura-links/pura-links.component';
import { PuraTitlesComponent } from './components/pura-titles/pura-titles.component';

export const themeRoutes = [
    {
        path: '',
        pathMatch: 'full',
        component: PuraComponent
    }
];

@NgModule({
  declarations: [
    PuraComponent,
    PuraButtonsComponent,
    PuraLinksComponent,
    PuraTitlesComponent
],
  imports: [
    CommonModule,
    RouterModule.forChild(themeRoutes),
    HighlightModule
  ]
})
export class PuraModule { }
