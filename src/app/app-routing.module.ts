import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { themesRoutes } from './themes/themes-routing.module';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'themes',
        loadChildren: () => import('./themes/themes.module').then(m => m.ThemesModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
