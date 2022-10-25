import {Component, OnInit} from '@angular/core';
import {Liga} from "../../interfaces/schedule.interface";
import {ScheduleService} from "../../services/schedule.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {
  selected: string = '2022';
  schedule!: Liga[];

  displayedColumns: string[] = ['date', 'host', 'visitor'];

  
  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
    this.getSchedule();
  }

  getSchedule() {
    this.scheduleService.getSchedule(this.selected).subscribe(response => {
      this.schedule = response.league.standard.slice(0, 10);
    });
  }

 getTeamLogo(id: string){
  return `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`
 }
}
