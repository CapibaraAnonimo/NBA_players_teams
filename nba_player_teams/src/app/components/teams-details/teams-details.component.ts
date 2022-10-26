import {Component, OnInit} from '@angular/core';
import {TeamsService} from "../../services/teams.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PlayersService} from "../../services/players.service";
import {Standard} from "../../interfaces/players.interface";
import {Liga} from "../../interfaces/schedule.interface";
import {ScheduleService} from "../../services/schedule.service";

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.css']
})
export class TeamsDetailsComponent implements OnInit {
  id = '';
  found = false;
  team: any;
  players!: Standard[];
  selected: string = '2022';
  displayedColumns: string[] = ['firstName', 'team', 'jersey', 'pos', 'heightMeters', 'weightKilograms', 'country'];
  schedule!: Liga[];

  constructor(private teamService: TeamsService, private playerService: PlayersService, private route: ActivatedRoute,
              private router: Router, private scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getPlayers()
      this.getSchedule();
    });
  }

  reCharge() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getPlayers()
      this.getSchedule();
    });
  }

  getPlayers() {
    let playersTeam: Standard[] = [];
    this.playerService.getPlayers(this.selected).subscribe(response => {
      for (let player of [...response.league.standard, ...response.league.africa, ...response.league.sacramento, ...response.league.vegas, ...response.league.utah]) {
        if (player.teamId == this.id) {
          playersTeam.push(player);
        }
      }
      this.players = playersTeam;
    });
  }

  getSchedule() {
    this.scheduleService.getSchedule(this.selected).subscribe(response => {
      let allLeagues: Liga[] = [...response.league.standard, ...response.league.africa, ...response.league.sacramento, ...response.league.vegas, ...response.league.utah];
      let aux: Liga[] = [];
      for (let i = 0; i > allLeagues.length || aux.length < 10; i++) {
        if (allLeagues[i].hTeam.teamId == this.id || allLeagues[i].vTeam.teamId == this.id) {
          aux.push(allLeagues[i]);
        }
      }
      this.schedule = aux;
    });
  }

  redirect(url: string) {
    this.router.navigate([`/${url}`]);
  }
}
