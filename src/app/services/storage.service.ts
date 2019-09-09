import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setIps(ips: IPv4 []): void {
    localStorage.setItem('ips', JSON.stringify(ips));
  }

  getIps(): IPv4 [] {
    return localStorage.getItem('ips') ? JSON.parse(localStorage.getItem('ips')) : [];
  }
}
