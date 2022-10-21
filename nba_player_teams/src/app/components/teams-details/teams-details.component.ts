import {Component, OnInit} from '@angular/core';
import {TeamsService} from "../../services/teams.service";
import {ActivatedRoute} from "@angular/router";
import {PlayersService} from "../../services/players.service";

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.css']
})
export class TeamsDetailsComponent implements OnInit {
  id = -1;
  found = false
  team: any;
  players: any[] = [];
  displayedColumns: string[] = ['firstName', 'team', 'jersey', 'pos', 'heightMeters'];

  constructor(private teamService: TeamsService, private playerService: PlayersService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.teamService.getTeams('2022').subscribe(response => {
      for (let team of response.league.standard) {
        if (team.teamId == this.id.toString()) {
          this.team = team;
          this.found = true;
        }
      }
      if (!this.found) {
        for (let team of response.league.africa) {
          if (team.teamId == this.id.toString()) {
            this.team = team;
            this.found = true;
          }
        }
        if (!this.found) {
          for (let team of response.league.sacramento) {
            if (team.teamId == this.id.toString()) {
              this.team = team;
              this.found = true;
            }
          }
          if (!this.id) {
            for (let team of response.league.vegas) {
              if (team.teamId == this.id.toString()) {
                this.team = team;
                this.found = true;
              }
            }
            if (!this.found) {
              for (let team of response.league.utah) {
                if (team.teamId == this.id.toString()) {
                  this.team = team;
                  this.found = true;
                }
              }
            }
          }
        }
      }
    })
    this.playerService.getPlayers(2022).subscribe(response => {
      for (let player of [...response.league.standard, ...response.league.africa, ...response.league.sacramento, ...response.league.vegas, ...response.league.utah]) {
        if (player.teamId == this.id.toString()) {
          this.players.push(player);
        }
      }
    })
  }

}
