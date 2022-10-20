import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayersResponse } from '../interfaces/players.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http:HttpClient) { }
  
  getPlayers(year: number):Observable<PlayersResponse>{
    return this.http.get<PlayersResponse>(`${environment.baseUrl}/data/10s/prod/v1/${year}/players.json`);
  }
}
