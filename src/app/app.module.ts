import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { AuthGuardService } from './auth-guard.service';

import * as $ from 'jquery';
import * as $p from 'popper.js';
import * as $b from 'bootstrap';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestApiService, DataService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
