import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GameDetailsService } from './game-details/game-details.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig, API_CONFIG } from './app.config';

export const IGDB_CONFIG: AppConfig = {
  url: 'https://api-v3.igdb.com/',
  key: 'be3af8737e099307337b9f2edc9ad45f'
};
@NgModule({
  declarations: [AppComponent, LandingComponent, GameDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [
    { provide: API_CONFIG, useValue: IGDB_CONFIG },
    GameDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
