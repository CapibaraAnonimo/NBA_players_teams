import {Component, OnInit} from '@angular/core';
import {TeamsService} from "../../services/teams.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PlayersService} from "../../services/players.service";
import {Standard} from "../../interfaces/players.interface";

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.css']
})
export class TeamsDetailsComponent implements OnInit {
  id = '';
  found = false
  team: any;
  players!: Standard[];
  selected: string = '2022';
  displayedColumns: string[] = ['firstName', 'team', 'jersey', 'pos', 'heightMeters', 'weightKilograms', 'country'];

  constructor(private teamService: TeamsService, private playerService: PlayersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      let playersTeam: Standard[] = [];
      this.playerService.getPlayers(+this.selected).subscribe(response => {
        for (let player of [...response.league.standard, ...response.league.africa, ...response.league.sacramento, ...response.league.vegas, ...response.league.utah]) {
          if (player.teamId == this.id) {
            playersTeam.push(player);
          }
        }
        this.players = playersTeam;
      });
    });
  }

  reCharge() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      let playersTeam: Standard[] = [];
      this.playerService.getPlayers(+this.selected).subscribe(response => {
        for (let player of [...response.league.standard, ...response.league.africa, ...response.league.sacramento, ...response.league.vegas, ...response.league.utah]) {
          if (player.teamId == this.id) {
            playersTeam.push(player);
          }
        }
        this.players = playersTeam;
      });
    });
  }

  redirect(url: string) {
    this.router.navigate([`/${url}`]);
  }
}
