import {Component, Input, OnInit} from '@angular/core';
import {Liga} from "../../interfaces/schedule.interface";

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  @Input() schedule!: Liga[];
  displayedColumns: string[] = ['date', 'host', 'visitor'];

  constructor() { }

  ngOnInit(): void {
  }

  getTeamLogo(id: string){
    return `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`
  }
}
