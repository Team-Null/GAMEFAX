import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { TestApiComponent } from './components/test-api/test-api.component';
import { TestApiService } from './services/test-api.service';

// Defining the routing system for each url page and default redirect to home
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // Routing to test invokes TestApiComponent
  { path: 'test', component: TestApiComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  // Components go in declarations
  declarations: [
    AppComponent,
    HomeComponent,
    TestApiComponent
  ],

  // Modules go in imports
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],

  // Services go in providers
  providers: [TestApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
