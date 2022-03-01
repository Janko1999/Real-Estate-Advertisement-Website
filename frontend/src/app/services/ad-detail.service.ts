import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ad } from '../models/Ad';

@Injectable({
  providedIn: 'root'
})
export class AdDetailService {

  constructor(private httpClient:HttpClient) { }

  ad:Ad;

  addToFavourites(username:string, ad:Ad){
    const data={
      username:username,
      name:ad.naziv,
      adUser:ad.username
    }
    return this.httpClient.post("http://localhost:4000/ads/addToFavourites", data);
  }

  incrementFavourites(){
    const data={
      username:sessionStorage.getItem("user")
    }
    return this.httpClient.post("http://localhost:4000/users/incFav", data);
  }
  decrementFavourites(){
    const data={
      username:sessionStorage.getItem("user")
    }
    return this.httpClient.post("http://localhost:4000/users/decFav", data);
  }

  getAgency(name:string){
    const data={
      name:name
    }
    return this.httpClient.post("http://localhost:4000/ads/getAgency", data);

  }
}
