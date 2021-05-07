import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimeHomeComponent } from './Components/anime-home/anime-home.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularComponent } from './Components/popular/popular.component';
import { AnimeDetailsComponent } from './Components/anime-details/anime-details.component';
import { EpisodesPipe } from './Pipes/episodes.pipe';
import { AnimePlayerComponent } from './Components/anime-details/anime-player/anime-player.component';
import { ShowDetailsComponent } from './Components/anime-details/show-details/show-details.component';


import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';


@NgModule({
  declarations: [
    AppComponent,
    AnimeHomeComponent,
    PopularComponent,
    AnimeDetailsComponent,
    EpisodesPipe,
    AnimePlayerComponent,
    ShowDetailsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
