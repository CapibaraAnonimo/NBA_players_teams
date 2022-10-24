import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import {Standard} from "../../interfaces/players.interface";

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css']
})
export class PlayersDetailsComponent implements OnInit {
  id= '';
  currentPlayer: Standard | undefined;

  constructor(private route: ActivatedRoute, private playerService:PlayersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = params['id']
    })
    this.getPlayer(2018);
  }

  getPlayer(year:number){
    this.playerService.getPlayers(year).subscribe(resp=>{
      let playersArray =[...resp.league.standard, ...resp.league.africa, ...resp.league.sacramento, ...resp.league.vegas, ...resp.league.utah];
      this.currentPlayer = playersArray.find(x => x.personId === this.id);
    })
  }

}
