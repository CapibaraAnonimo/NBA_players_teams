import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  selected: string = '2022';

  constructor(private route: ActivatedRoute, private playerService:PlayersServic, private router: Routere) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = params['id']
    })
    this.getPlayer('2018');
  }

  getPlayer(year:string){
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

  reCharge() {
  }

  redirect(url: string) {
    this.router.navigate([`/${url}`]);
  }
}
