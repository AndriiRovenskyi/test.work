import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }


  findIp(ip: string) {
    return this.http.get('https://ipfind.co/?auth=3332c9bd-b7ab-42fc-a750-30544f360c9f&ip=' + ip)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(err){
    alert(err.error.error);
    return of(null);
  }
}
