import {Component, OnInit} from '@angular/core';
import {TeamsService} from "../../services/teams.service";
import {Africa, Sacramento, Standard, Utah, Vega} from "../../interfaces/teams.interface";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  standard: Standard[] = [];
  africa: Africa[] = [];
  sacramento: Sacramento[] = [];
  vega: Vega[] = [];
  utah: Utah[] = [];
  selected: string = '2022';

  constructor(private teamsService: TeamsService) {
  }

  ngOnInit(): void {
    this.teamsService.getTeams(this.selected).subscribe(response => {
      this.standard = response.league.standard;
      this.africa = response.league.africa;
      this.sacramento = response.league.sacramento;
      this.vega = response.league.vegas;
      this.utah = response.league.utah;
    });
  }

  getTeamSVG(id: string) {
    return `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`
  }

  reCharge() {
    this.standard = [];
    this.africa = [];
    this.sacramento = [];
    this.vega = [];
    this.utah = [];
    this.teamsService.getTeams(this.selected).subscribe(response => {
      this.standard = response.league.standard;
      this.africa = response.league.africa;
      this.sacramento = response.league.sacramento;
      this.vega = response.league.vegas;
      this.utah = response.league.utah;
    });
  }
}
