import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TeamsComponent} from './components/teams/teams.component';
import {MaterialImportsModule} from "./modules/material-imports.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { TeamsDetailsComponent } from './components/teams-details/teams-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialImportsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
