import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ScheduleResponse} from "../interfaces/schedule.interface";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) {
  }

    getSchedule(year: string): Observable<ScheduleResponse> {
      return this.http.get<ScheduleResponse>(`${environment.baseUrl}/data/10s/prod/v1/${year}/schedule.json`);
    }
}
