import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { IpSearchComponent } from './components/ip-search/ip-search.component';
import { IpTableComponent } from './components/ip-table/ip-table.component';
import { IpBoxComponent } from './components/ip-box/ip-box.component';

@NgModule({
  declarations: [
    AppComponent,
    IpSearchComponent,
    IpTableComponent,
    IpBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
