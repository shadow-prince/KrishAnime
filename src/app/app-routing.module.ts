import { AnimePlayerComponent } from './Components/anime-details/anime-player/anime-player.component';
import { ShowDetailsComponent } from './Components/anime-details/show-details/show-details.component';
import { AnimeDetailsComponent } from './Components/anime-details/anime-details.component';
import { PopularComponent } from './Components/popular/popular.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeHomeComponent } from './Components/anime-home/anime-home.component';

const routes: Routes = [
  { path: '', component: AnimeHomeComponent },
  { path: 'home', component: AnimeHomeComponent },
  { path: 'popular', component: PopularComponent },
  {
    path: 'details/:id', component: AnimeDetailsComponent,
    children: [
      {path:'',component:ShowDetailsComponent},
      {path:'player/:epno',component:AnimePlayerComponent}
    ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
