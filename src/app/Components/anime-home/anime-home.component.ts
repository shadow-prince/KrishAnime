import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-home',
  templateUrl: './anime-home.component.html',
  styleUrls: ['./anime-home.component.css']
})
export class AnimeHomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  recently: Results[] = []
  ngOnInit(): void {
    this.getRecently()
  }
  getRecently() {
    this.apiService.recenltyAdded().subscribe((data) => this.recently = data['results'])
  }
}
class Results {
  "title": string;
  "id": number;
  "image": string;
  "episodenumber": number
}
