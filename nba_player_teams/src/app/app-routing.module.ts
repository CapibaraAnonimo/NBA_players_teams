import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamsComponent} from "./components/teams/teams.component";
/*import {TeamsDetailsComponent} from "./components/teams_details/teams_details.component";
import {PlayersComponent} from "./components/players/players.component";*/

const routes: Routes = [
  {path: '', },
/*  {path: 'players', component: PlayersComponent},*/
  {path: 'teams', children: [
      {path: '', component: TeamsComponent},
/*      {path: ':id', component: TeamsDetailsComponent}*/
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
