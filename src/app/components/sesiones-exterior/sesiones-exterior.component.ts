import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesiones-exterior',
  templateUrl: './sesiones-exterior.component.html',
  styleUrls: ['./sesiones-exterior.component.css']
})
export class SesionesExteriorComponent implements OnInit {

  phone: boolean = false;

  constructor(private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakPointObserver.observe('(max-width: 600px)').subscribe(
      res => this.phone = res.matches
    )
  }

}
