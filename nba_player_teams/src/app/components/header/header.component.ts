import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() selected = '2022';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(url: string) {
    this.router.navigate([`/${url}`]);
  }


}
