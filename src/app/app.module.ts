import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HTMLCollectorComponent } from './components/htmlcollector/htmlcollector.component';
import { TestApiComponent } from './components/test-api/test-api.component';
import { TwitchComponent } from './components/twitch/twitch.component';

import { APIControllerService } from './services/apicontroller.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HTMLCollectorComponent,
    TestApiComponent,
    TwitchComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    AppRoutingModule
  ],

  providers: [APIControllerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
