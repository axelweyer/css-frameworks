import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { ThemesModule } from './themes/themes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    ThemesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
