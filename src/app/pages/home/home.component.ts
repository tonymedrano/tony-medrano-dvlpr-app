import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('sideNav') nav: any;
  @ViewChild('hamburger') ham: any;
  title = 'tony medrano dvlpr';

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.nav.nativeElement.classList.toggle("is-active");
    this.ham.nativeElement.classList.toggle("active");
  }

}
