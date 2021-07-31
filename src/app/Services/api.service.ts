import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {



  constructor(private httpClient: HttpClient) { }


  private id: string = ''
  setId(id: string) {
    this.id = id
  }
  getId(): string {
    return this.id
  }

  private base_url = 'https://krish-anime-api-98k6.vercel.app/api/'

  recenltyAdded(): Observable<any> {
    return this.httpClient.get<any>(this.base_url + 'recentlyadded/' + 1)
  }

  genresList(): Observable<any> {
    return this.httpClient.get<any>(this.base_url + 'genrelist')
  }

  gerPopularAnime(): Observable<any> {
    return this.httpClient.get<any>(this.base_url + 'popular/' + 1)
  }

  fetchAnimeBytId(animeId: string): Observable<any> {
    return this.httpClient.get<any>(this.base_url + 'details/' + animeId)
  }

  fetchVideoLinks(animeId: string, epno: number) {
    return this.httpClient.get<any>(this.base_url + 'watching/' + animeId + '/' + epno)
  }
}
