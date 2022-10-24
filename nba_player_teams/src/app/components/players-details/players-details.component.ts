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
  getPlayerImg(player:Standard){
    let imgUrl="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/"+player.personId+".png";

    return imgUrl;
  }
  getPlayerAge(player: Standard){
    let age: number;
    var timeDiff = Math.abs(Date.now() - new Date(player.dateOfBirthUTC).getTime());
    age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age;
  }
  getTeamSVG(idTeam: string) {
    return `https://cdn.nba.com/logos/nba/${idTeam}/global/L/logo.svg`
  }
  }

