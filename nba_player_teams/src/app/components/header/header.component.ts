import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selected: string = '2022';
  @Output() onSelected = new EventEmitter<string>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  redirect(url: string) {
    this.router.navigate([`/${url}`]);
  }

  onSelectedYear(year: string) {
    this.onSelected.emit(year);
  }
}
