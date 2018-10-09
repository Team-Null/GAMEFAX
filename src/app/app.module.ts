import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { APIControllerService } from './services/apicontroller.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HTMLCollectorComponent } from './components/htmlcollector/htmlcollector.component';
import { TestApiComponent } from './components/test-api/test-api.component';
import { TwitchComponent } from './components/twitch/twitch.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EbayComponent } from './components/ebay/ebay.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HTMLCollectorComponent,
    TestApiComponent,
    TwitchComponent,
    EbayComponent,
    YoutubeComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatToolbarModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],

  providers: [APIControllerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
