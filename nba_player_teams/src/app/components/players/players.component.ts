import { AfterViewInit, Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { Internal, League, Standard } from 'src/app/interfaces/players.interface';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  listPlayers: Standard[]=[];
  africaPlayers: Standard[]= [];
  sacramentoPlayers:Standard[]=[];
  vegaPlayers: Standard[]=[];
  utahPlayers: Standard[]=[];

  constructor(private PlayersService: PlayersService) { }

  ngOnInit(): void {
    this.getPlayers(2018);
  }

  getPlayers(year:number){
    this.PlayersService.getPlayers(year).subscribe(resp =>{
      this.listPlayers = resp.league.standard;
      this.africaPlayers = resp.league.africa;
      this.sacramentoPlayers = resp.league.sacramento;
      this.vegaPlayers = resp.league.vegas;
      this.utahPlayers = resp.league.utah;
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

  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "/assets/images/missingPlayer.png";
  }
}
