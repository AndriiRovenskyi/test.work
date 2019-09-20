import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ip-box',
  templateUrl: './ip-box.component.html',
  styleUrls: ['./ip-box.component.scss']
})
export class IpBoxComponent implements OnInit {

  @Input() ownData: any;

  constructor() { }

  ngOnInit() {
  }

}
