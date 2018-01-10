import { Component, OnInit } from '@angular/core';
import { Log } from '../log'

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  log: Log = {
    id: 1,
    name: 'Malibu for a Few'
  };

  constructor() { }

  ngOnInit() {
  }

}
