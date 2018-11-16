import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers/reducers';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';
import { EffectsModule } from '@ngrx/effects';
import { WebcamEffects } from './effects/webcam.effects';
import { WebcamService } from './services/webcam.service';
import { HttpClientModule } from '@angular/common/http';
import {WebcamModule} from 'ngx-webcam';
import { WebcamComponent } from './components/webcam/webcam.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([WebcamEffects]),
    InMemoryWebApiModule.forRoot(TestData),
    WebcamModule,
    FormsModule
  ],
  providers: [WebcamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
