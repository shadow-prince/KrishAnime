import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  constructor(private actRouter: ActivatedRoute, private _apiService: ApiService) { }

  id: string = ''
  details: Details[] = []
  totalEps!: number
  numbers=[]

  ngOnInit(): void {
    this.id = this.actRouter.snapshot.params['id']
    this._apiService.setId(this.id)
    this._apiService.fetchAnimeBytId(this.id).subscribe(
      (data) =>{
         this.details = data['results']
          this.totalEps=this.details[0].totalepisode

        }
        )

  }

}

class Details {
  "title": string
  "image": string
  "type": string
  "summary": string
  "relased": string
  "genres": string
  "status": string
  "totalepisode": number
  "Othername": string
}
