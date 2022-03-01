import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ad } from '../models/Ad';


@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private httpClient:HttpClient) { }

  getAds(){
    return this.httpClient.get("http://localhost:4000/ads/getAds");
  }
  getFavourites(){
    const data={
      username:sessionStorage.getItem("user")
    }
    return this.httpClient.post("http://localhost:4000/ads/getFavourites",data);
  }
  removeFavourite(ad:Ad){
    const data={
    
      username:sessionStorage.getItem("user"),
      name:ad.naziv,
      adUser:ad.username
    }
    return this.httpClient.post("http://localhost:4000/ads/removeFromFavourites",data);
  }
}
