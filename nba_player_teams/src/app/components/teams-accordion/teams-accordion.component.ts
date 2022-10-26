import {Component, Input, OnInit} from '@angular/core';
import {Team} from "../../interfaces/teams.interface";

@Component({
  selector: 'app-teams-accordion',
  templateUrl: './teams-accordion.component.html',
  styleUrls: ['./teams-accordion.component.css']
})
export class TeamsAccordionComponent implements OnInit {
  @Input() teams!: Team[];

  constructor() { }

  ngOnInit(): void {
  }

  getTeamSVG(id: string) {
    return `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`
  }
}
