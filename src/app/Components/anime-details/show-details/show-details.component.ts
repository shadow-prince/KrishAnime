import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  details: Details[] = []
  constructor(private actRouter: ActivatedRoute, private _apiService: ApiService) { }
  id: string = ''
  ngOnInit(): void {
    this.id = this.actRouter.snapshot.params['id']
    this._apiService.setId(this.id)
    this._apiService.fetchAnimeBytId(this.id).subscribe(
      (data) => {
        this.details = data['results']

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
