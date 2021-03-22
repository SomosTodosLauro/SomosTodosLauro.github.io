import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioModule } from './audio/audio.module';
import { LauroModule } from './lauro/lauro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LauroModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    AudioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
