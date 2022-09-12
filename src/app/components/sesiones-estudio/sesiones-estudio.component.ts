import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesiones-estudio',
  templateUrl: './sesiones-estudio.component.html',
  styleUrls: ['./sesiones-estudio.component.css']
})
export class SesionesEstudioComponent implements OnInit {

  phone: boolean = false;

  constructor(private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakPointObserver.observe('(max-width: 600px)').subscribe(
      res => this.phone = res.matches
    )
  }

}
