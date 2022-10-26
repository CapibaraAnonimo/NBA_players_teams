import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Standard } from 'src/app/interfaces/players.interface';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerList: Standard[]=[];

  constructor(private PlayersService: PlayersService, private router: Router) { }

  ngOnInit(): void {
  }
  

  getPlayerImg(player: Standard) {
    let imgUrl = "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" + player.personId + ".png";

    return imgUrl;
  }

  getPlayerAge(player: Standard) {
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
