import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamsDetailsComponent } from './components/teams-details/teams-details.component';
import { PlayersDetailsComponent } from './components/players-details/players-details.component';
/*import {PlayersComponent} from "./components/players/players.component";*/

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: 'players',
    children: [
      { path: '', component: PlayersComponent },
      { path: ':id', component: PlayersDetailsComponent },
    ],
  },
  {
    path: 'teams',
    children: [
      { path: '', component: TeamsComponent },
      { path: ':id', component: TeamsDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
