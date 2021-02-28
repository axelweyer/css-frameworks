import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ThemesComponent } from "./themes.component";

export const themesRoutes: Routes = [
    {
        path: '',
        component: ThemesComponent,
        children: [
            {
                path: 'pura',
                loadChildren: () => import('./list/pura/pura.module').then(m => m.PuraModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(themesRoutes)],
    exports: [RouterModule]
})
export class ThemesRoutingModule { }