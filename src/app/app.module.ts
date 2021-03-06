import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { APIControllerService } from './services/apicontroller.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HTMLCollectorComponent } from './components/htmlcollector/htmlcollector.component';
import { TwitchComponent } from './components/twitch/twitch.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EbayComponent } from './components/ebay/ebay.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { WalmartComponent } from './components/walmart/walmart.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { WebdataComponent } from './components/webdata/webdata.component';
import { RedditComponent } from './components/reddit/reddit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HTMLCollectorComponent,
    TwitchComponent,
    EbayComponent,
    YoutubeComponent,
    WalmartComponent,
    TwitterComponent,
    WebdataComponent,
    RedditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FormsModule,
    HttpClientJsonpModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],

  providers: [APIControllerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
