import {Component, OnInit} from '@angular/core';
import {IpService} from "./services/ip.service";
import {StorageService} from "./services/storage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ips: IPv4 [];
  subscriber: Subscription;
  ownData$: any

  constructor(private ipService: IpService, private sotrageService: StorageService){}

  ngOnInit(){
    this.ips = this.sotrageService.getIps();
    this.ipService.getOwnIp().subscribe( res => {
      this.ownData$ = this.ipService.findIp(res);
    }, err => {
      debugger
    });
  }

  search(ip){
    this.subscriber = this.ipService.findIp(ip).subscribe((res: IPv4) => {

      if(!res) {return}
      this.addIp(res);
    })


  }

  addIp(ip: IPv4) {
    if(this.ips.length >= 10){
      this.ips.pop();
    }
    this.ips.unshift(ip);
    this.sotrageService.setIps(this.ips);
  }
}
