import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuraComponent } from './pura.component';
import { PuraButtonsComponent } from './components/pura-buttons/pura-buttons.component';
import { RouterModule } from '@angular/router';

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
    PuraButtonsComponent
],
  imports: [
    CommonModule,
    RouterModule.forChild(themeRoutes)
  ]
})
export class PuraModule { }
