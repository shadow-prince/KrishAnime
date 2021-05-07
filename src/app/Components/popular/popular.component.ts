import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(private _apiService: ApiService) { }
  popular: Result[] = []

  ngOnInit() {
    this._apiService.gerPopularAnime().subscribe((data)=>this.popular=data['results'])
  }
  showDetails(){

  }


}
class Result {
  "title": string
  "id": string
  "image": string
}
