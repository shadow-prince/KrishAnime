import { ApiService } from './Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'KrishAnime';
  menuToggle = true;
  darkMode = false;
  genres: string[] = []
  constructor(private _apiService: ApiService) { }
  ngOnInit() {
    this._apiService.genresList().subscribe((data) => this.genres = data['list'])
  }
}
