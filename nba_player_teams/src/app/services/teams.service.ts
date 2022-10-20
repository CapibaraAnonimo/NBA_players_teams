import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TeamsResponse} from "../interfaces/teams.interface";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) {
  }

  getTeams(year: string): Observable<TeamsResponse> {
    return this.http.get<TeamsResponse>(`${environment.baseUrl}/data/10s/prod/v1/${year}/teams.json`);
  }
}
