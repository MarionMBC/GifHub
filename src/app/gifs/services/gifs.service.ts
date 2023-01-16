import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Gif, SearchGifsRes } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string [] = [];
  public data:Gif [] = []
  private apyKey:string = 'aySaGKPhkRFnFAp0ZMGAbCEvHXacT7Fh'
  private urlService:string = 'https://api.giphy.com/v1/gifs'

  get history():string[] {
    return [...this._history]
  }


  searchGif(query: string) {
    query = query.trim().toLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
      localStorage.setItem('history', JSON.stringify(this._history))
    }
    this.httpReq (query)
  }


  searchGifHistory(query:string) {
    const index = this._history.indexOf(query)
    this._history.splice(index, 1)
    this._history.unshift(query)
    localStorage.setItem('history', JSON.stringify(this._history))
    this.httpReq(query)
  }



  httpReq (query: string) {

    const params = new HttpParams ()
    .set('api_key',this.apyKey)
    .set('limit', '10')
    .set('q', query);

    this.httpClient.get<SearchGifsRes>(`${this.urlService}/search`, {params})
    .subscribe((res) =>{
      this.data = res.data
      localStorage.setItem('result',JSON.stringify(this.data))
    })
  }


  constructor(private httpClient: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.data = JSON.parse(localStorage.getItem('result')!) || [];
  }


}
