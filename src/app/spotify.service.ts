import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private baseURL:string = 'https://api.spotify.com/v1/';
  private searchURL:string = this.baseURL+'search?q=';
  private authToken:string = "Bearer BQA6qm_XnYynpWsjn6vTzpZwxAp26IDTK7FMNYosi4ONkM_sNElP-9n1NrX2SyLjevPm7dKLwnVgx3Qd3o0b--b3KZDXsSHjFe4pdCjvclk9VoMqcu7wUzB_bJ3wdNNAaAONY-u1D1ja2D4dEtTLDfQ1lhWUfgy7wNOohJ49ex8y19LZuieVtgAb5HsD5tNbJ1pEYn62qKbfDjf_OJ_0aAe1mWa7FbL-UkkQL9-lvJle-OD5oqnycU8d"
  
  private requestHeader = new HttpHeaders().set('Content-Type','application/json').append('Authorization',this.authToken)
  constructor(public http: HttpClient) { 
    
  }
  searchSongs(name:string){
    return this.http.get(this.searchURL+name+'&type=track', {headers: this.requestHeader});
      
  }
}
