import {Component, OnInit} from '@angular/core';
import {TeamsService} from "../../services/teams.service";
import {Standard} from "../../interfaces/teams.interface";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  standard: Standard[] = [];
  panelOpenState = false;

  constructor(private teamsService: TeamsService) {
  }

  ngOnInit(): void {
    this.teamsService.getTeams('2020').subscribe(response => {
        this.standard = response.league.standard;
      }
    )
  }

  getTeamSVG(id: string) {
    return `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`
  }
}
