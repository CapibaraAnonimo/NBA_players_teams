import { Component, OnInit } from '@angular/core';
import { Internal, League, Standard } from 'src/app/interfaces/players.interface';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private PlayersService: PlayersService) { }
  listPlayers: Standard[]=[]

  ngOnInit(): void {
    this.getPlayers(2021);
  }

  getPlayers(year:number){
    this.PlayersService.getPlayers(year).subscribe(resp =>{
      this.listPlayers = resp.league.standard;
    })
  }
  getPlayerImg(player:Standard){
    let imgUrl="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/"+player.personId+".png";

    return imgUrl;
  }
}
