import {Component, OnInit} from '@angular/core';
import {TeamsService} from "../../services/teams.service";
import {Africa, Sacramento, Standard, Utah, Vega} from "../../interfaces/teams.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  standard: Standard[] = [];
  standard2: Standard[] = [];
  africa: Africa[] = [];
  africa2: Africa[] = [];
  sacramento: Sacramento[] = [];
  sacramento2: Sacramento[] = [];
  vega: Vega[] = [];
  vega2: Vega[] = [];
  utah: Utah[] = [];
  utah2: Utah[] = [];
  selected: string = '2022';

  constructor(private teamsService: TeamsService, private router: Router) {
  }

  ngOnInit(): void {
    this.teamsService.getTeams(this.selected).subscribe(response => {
      if (response.league.standard.length % 2 == 0) {
        this.standard = response.league.standard.slice(1, response.league.standard.length / 2)
        this.standard2 = response.league.standard.slice(response.league.standard.length / 2, response.league.standard.length)
      } else {
        this.standard = response.league.standard.slice(0, response.league.standard.length / 2 + 1)
        this.standard2 = response.league.standard.slice(response.league.standard.length / 2 + 1)
      }

      if (response.league.africa.length % 2 == 0) {
        this.africa = response.league.africa.slice(1, response.league.africa.length / 2)
        this.africa2 = response.league.africa.slice(response.league.africa.length / 2, response.league.africa.length)
      } else {
        this.africa = response.league.africa.slice(0, response.league.africa.length / 2 + 1)
        this.africa2 = response.league.africa.slice(response.league.africa.length / 2 + 1)
      }

      if (response.league.sacramento.length % 2 == 0) {
        this.sacramento = response.league.sacramento.slice(1, response.league.sacramento.length / 2)
        this.sacramento2 = response.league.sacramento.slice(response.league.sacramento.length / 2, response.league.sacramento.length)
      } else {
        this.sacramento = response.league.sacramento.slice(0, response.league.sacramento.length / 2 + 1)
        this.sacramento2 = response.league.sacramento.slice(response.league.sacramento.length / 2 + 1)
      }

      if (response.league.vegas.length % 2 == 0) {
        this.vega = response.league.vegas.slice(1, response.league.vegas.length / 2)
        this.vega2 = response.league.vegas.slice(response.league.vegas.length / 2, response.league.vegas.length)
      } else {
        this.vega = response.league.vegas.slice(0, response.league.vegas.length / 2 + 1)
        this.vega2 = response.league.vegas.slice(response.league.vegas.length / 2 + 1)
      }

      if (response.league.utah.length % 2 == 0) {
        this.utah = response.league.utah.slice(1, response.league.utah.length / 2)
        this.utah2 = response.league.utah.slice(response.league.utah.length / 2, response.league.utah.length)
      } else {
        this.utah = response.league.utah.slice(0, response.league.utah.length / 2 + 1)
        this.utah2 = response.league.utah.slice(response.league.utah.length / 2 + 1)
      }
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
    this.standard2 = [];
    this.africa2 = [];
    this.sacramento2 = [];
    this.vega2 = [];
    this.utah2 = [];
    this.teamsService.getTeams(this.selected).subscribe(response => {
      if (response.league.standard.length % 2 == 0) {
        this.standard = response.league.standard.slice(1, response.league.standard.length / 2)
        this.standard2 = response.league.standard.slice(response.league.standard.length / 2, response.league.standard.length)
      } else {
        this.standard = response.league.standard.slice(0, response.league.standard.length / 2 + 1)
        this.standard2 = response.league.standard.slice(response.league.standard.length / 2 + 1)
      }

      if (response.league.africa.length % 2 == 0) {
        this.africa = response.league.africa.slice(1, response.league.africa.length / 2)
        this.africa2 = response.league.africa.slice(response.league.africa.length / 2, response.league.africa.length)
      } else {
        this.africa = response.league.africa.slice(0, response.league.africa.length / 2 + 1)
        this.africa2 = response.league.africa.slice(response.league.africa.length / 2 + 1)
      }

      if (response.league.sacramento.length % 2 == 0) {
        this.sacramento = response.league.sacramento.slice(1, response.league.sacramento.length / 2)
        this.sacramento2 = response.league.sacramento.slice(response.league.sacramento.length / 2, response.league.sacramento.length)
      } else {
        this.sacramento = response.league.sacramento.slice(0, response.league.sacramento.length / 2 + 1)
        this.sacramento2 = response.league.sacramento.slice(response.league.sacramento.length / 2 + 1)
      }

      if (response.league.vegas.length % 2 == 0) {
        this.vega = response.league.vegas.slice(1, response.league.vegas.length / 2)
        this.vega2 = response.league.vegas.slice(response.league.vegas.length / 2, response.league.vegas.length)
      } else {
        this.vega = response.league.vegas.slice(0, response.league.vegas.length / 2 + 1)
        this.vega2 = response.league.vegas.slice(response.league.vegas.length / 2 + 1)
      }

      if (response.league.utah.length % 2 == 0) {
        this.utah = response.league.utah.slice(1, response.league.utah.length / 2)
        this.utah2 = response.league.utah.slice(response.league.utah.length / 2, response.league.utah.length)
      } else {
        this.utah = response.league.utah.slice(0, response.league.utah.length / 2 + 1)
        this.utah2 = response.league.utah.slice(response.league.utah.length / 2 + 1)
      }
    });
  }

  redirect(url: string) {
    this.router.navigate([`/${url}`]);
  }
}
