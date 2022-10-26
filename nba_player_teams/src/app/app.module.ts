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
import { PlayersComponent } from './components/players/players.component';
import { IndexComponent } from './components/index/index.component';
import { PlayersDetailsComponent } from './components/players-details/players-details.component';
import { TeamsAccordionComponent } from './components/teams-accordion/teams-accordion.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayersComponent,
    TeamsComponent,
    TeamsDetailsComponent,
    PlayersComponent,
    IndexComponent,
    PlayersDetailsComponent,
    TeamsAccordionComponent,
    MatchesTableComponent,
    PlayerComponent
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
