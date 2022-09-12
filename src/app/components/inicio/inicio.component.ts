import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  phone:boolean = false;

  constructor(private breakpointObserver:BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe('(max-width: 600px)').subscribe(
      res => this.phone = res.matches
    )
  }

}
