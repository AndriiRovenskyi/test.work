import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-ip-search',
  templateUrl: './ip-search.component.html',
  styleUrls: ['./ip-search.component.scss']
})
export class IpSearchComponent {

  @Output() search: EventEmitter<string> = new EventEmitter();

  searchField: FormControl;

  constructor() {
    this.searchField = new FormControl('', Validators.pattern('^(?:(?:^|\\.)(?:2(?:5[0-5]|[0-4]\\d)|1?\\d?\\d)){4}$'));
  }
}
