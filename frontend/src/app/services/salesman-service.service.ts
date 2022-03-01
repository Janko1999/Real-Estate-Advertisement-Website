import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ad } from '../models/Ad';


@Injectable({
  providedIn: 'root'
})
export class SalesmanServiceService {

  constructor(private httpClient:HttpClient) { }

  selectedAd:Ad;


  newAdd(tip:string, sprat:string, ukupnoSpratova:string, opis:string, cena:string,rezije:string,
    grejanje:string, sobe:string, povrsina:string, stanje:string, balkon:boolean, terasa:boolean, lodja:boolean, 
    klima:boolean, parking:boolean, lift:boolean,
    podrum:boolean, garaza:boolean, interfon:boolean, internet:boolean, telefon:boolean, basta:boolean, 
    username:string, naziv:string, godina:string, imageData, busLines:string[], agency:boolean, agencyName:string,
    city:string, state:string, microlocation:string, street:string){
      const data={
        naziv:naziv,
         
        tip:tip,
        sprat:sprat, 
        ukupnoSpratova:ukupnoSpratova,
        opis:opis,
        cena:cena,
        grejanje:grejanje, 
        sobe:sobe, 
        povrsina:povrsina, 
        stanje:stanje, 
        balkon:balkon, 
        terasa:terasa, 
        lodja:lodja, 
        klima:klima,
        parking:parking, 
        lift:lift,
        podrum:podrum, 
        garaza:garaza, 
        interfon:interfon, 
        internet:internet,
        telefon:telefon,
        basta:basta,
        username:username,
        godina:godina,
        imageData:imageData,
        rezije:rezije,
        busLines:busLines,
        agency:agency,
        agencyName:agencyName,
        city:city,
        state:state,
        microlocation:microlocation,
        street:street
        
      };
      return this.httpClient.post("http://localhost:4000/ads/newAd", data);
    }
    getMyAds(username:string){
      const data={
        username:username
      }
      return this.httpClient.post("http://localhost:4000/ads/getMyAds", data); 
    }
    getAds(){
      
      return this.httpClient.get("http://localhost:4000/ads/getAds"); 
    }
    getSoldAds(){
      
      return this.httpClient.get("http://localhost:4000/ads/getSoldAds"); 
    }
    sellAd(ad:Ad, username:string){
      const data={
        username:username,
        name:ad.naziv
      }
      return this.httpClient.post("http://localhost:4000/ads/sellAd", data); 
    }

    changeEmail(email:string){
      const data={
        email:email,
        username:sessionStorage.getItem("user")
      }
      return this.httpClient.post("http://localhost:4000/users/changeEmail", data); 
    }
    changePhoneNumber(phoneNumber:string){
      const data={
        phoneNumber:phoneNumber,
        username:sessionStorage.getItem("user")
      }
      return this.httpClient.post("http://localhost:4000/users/changePhoneNumber", data); 
    }
    changeAgency(agency:string){
      const data={
        agency:agency,
        username:sessionStorage.getItem("user")
        
      }
      return this.httpClient.post("http://localhost:4000/users/changeAgency", data); 
    }
    insertPictures(length, images, ad){
      for(let i=0;i<length;i++){
        const data={
          name:ad.naziv,
          username:ad.username,
          image:images[i]
        }
        this.httpClient.post("http://localhost:4000/ads/insertPicture", data);
      }
    }

    changeAd(ad:Ad, naziv:string){
      const data={
        ad:ad,
        naziv:naziv,
        username:sessionStorage.getItem("user")
      }
      return this.httpClient.post("http://localhost:4000/ads/changeAd", data);

    }
   updateAverage(avgPrice:number, location:string, tip:string){
     
    const data={
      location:location,
      avgPrice:avgPrice+"",
      tip:tip
    }
    return this.httpClient.post("http://localhost:4000/ads/updateAverage", data);
  }


   getAdsByLocation(location:string, tip:string){
     const data={
       location:location,
       tip:tip
     }
     return this.httpClient.post("http://localhost:4000/ads/getAdsByLocation", data);
   }
   getAdsByAgency(agency:string){
    const data={
      agencyName:agency,
      
    }
    return this.httpClient.post("http://localhost:4000/ads/getAdsByAgency", data);
  }
  setDate(username:string, naziv:string, date:Date){
    const data={
      name:naziv,
      username:username,
      date:(date.getMonth()+1)+""

    }
    return this.httpClient.post("http://localhost:4000/ads/setDate", data);
  }
  getStreets(){
      
    return this.httpClient.get("http://localhost:4000/location/getStreets"); 
  }
  getMicrolocations(){
      
    return this.httpClient.get("http://localhost:4000/location/getMicrolocations"); 
  }
  getCities(){
      
    return this.httpClient.get("http://localhost:4000/location/getCities"); 
  }
}
