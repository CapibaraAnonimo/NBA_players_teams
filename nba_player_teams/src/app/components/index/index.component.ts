import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Liga} from "../../interfaces/schedule.interface";
import {ScheduleService} from "../../services/schedule.service";
import {Router} from "@angular/router";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {
  @Output() myEvent = new EventEmitter();

  schedule!: Liga[];
  displayedColumns: string[] = ['date', 'host', 'visitor'];
  selection='';


  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
    this.getSchedule();
  }

  getSchedule() {
    this.scheduleService.getSchedule(this.selection).subscribe(response => {
      this.schedule = response.league.standard.slice(0, 10);
    });
  }


 getTeamLogo(id: string){
  return `https://cdn.nba.com/logos/nba/${id}/global/L/logo.svg`
 }

  reCharge() {
    this.schedule=[];
    this.getSchedule();
  }
}
