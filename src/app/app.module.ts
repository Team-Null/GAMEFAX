import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiTestComponent } from './components/api-test/api-test.component';
import { HomeComponent } from './components/home/home.component';

import { EbayService } from './services/ebay.service'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'api/:id', component: ApiTestComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ApiTestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EbayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
