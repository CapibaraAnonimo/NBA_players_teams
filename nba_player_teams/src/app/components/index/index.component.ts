import {Component, OnInit} from '@angular/core';
import {Liga} from "../../interfaces/schedule.interface";
import {ScheduleService} from "../../services/schedule.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {
  schedule!: Liga[];
  selected = '2022';


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

  reCharge() {
    this.schedule = [];
    this.getSchedule();
  }

  onSelectedYear(year: string) {
    this.selected = year;
    this.reCharge();
  }
}
