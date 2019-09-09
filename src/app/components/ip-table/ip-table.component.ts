import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ip-table',
  templateUrl: './ip-table.component.html',
  styleUrls: ['./ip-table.component.scss']
})
export class IpTableComponent{

  @Input() ips: IPv4 [];

  constructor() { }
}
