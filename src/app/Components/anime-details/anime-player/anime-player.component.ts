import { ApiService } from './../../../Services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-player',
  templateUrl: './anime-player.component.html',
  styleUrls: ['./anime-player.component.css']
})
export class AnimePlayerComponent implements OnInit {

  constructor(private actRouter: ActivatedRoute, private _apiService: ApiService) { }
  epno: number = 0
  links: link[] = []
  id: string = ''
  play:string=''
  ngOnInit(): void {
    this.epno = this.actRouter.snapshot.params['epno']

    this._apiService.fetchVideoLinks(this._apiService.getId(), this.epno).subscribe(data=>{
      this.links=data['links']
      this.play = this.links[0].src
    })
  }

}
class link {
  "src": string
  "size": number
}
