import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }

  register(username:string, password:string, firstname:string, lastname:string,
     email:string, city:string, agency:string, phoneNumber:string, licenseNumber:string, birthday:string, flag:boolean, isBuyer:boolean,
     imageData:string){
       let data;
       let typeString;
       if(isBuyer){
        typeString="Kupac";
       }
       else
       typeString="Oglasivac";
       if(flag){
        data={
         username:username,
         password:password,
         firstname:firstname,
         lastname:lastname,
         birthday:birthday,
         city:city,
         phoneNumber:phoneNumber,
         email:email,
         agency:agency,
         licenseNumber:licenseNumber,
         status:"Undetermined",
         typeString:typeString,
         imageData:imageData
       }
      }
      else{
         data={
          username:username,
          password:password,
          firstname:firstname,
          lastname:lastname,
          birthday:birthday,
          city:city,
          phoneNumber:phoneNumber,
          email:email,
          agency:agency,
          licenseNumber:licenseNumber,
          status:"Accept",
          typeString:typeString,
          imageData:imageData
        }
      }
       return this.httpClient.post('http://localhost:4000/users/register', data);
     }
     update(username:string, password:string, firstname:string, lastname:string,
      email:string, city:string, agency:string, phoneNumber:string, licenseNumber:string, birthday:string, flag:boolean, isBuyer:boolean,
      imageData:string, oldUsername:string){
        let data;
        let typeString;
        if(isBuyer){
         typeString="Kupac";
        }
        else
        typeString="Oglasivac";
       
          data={
           username:username,
           password:password,
           firstname:firstname,
           lastname:lastname,
           birthday:birthday,
           city:city,
           phoneNumber:phoneNumber,
           email:email,
           agency:agency,
           licenseNumber:licenseNumber,
           status:"Accept",
           typeString:typeString,
           imageData:imageData,
           oldUsername:oldUsername
         }
       
        return this.httpClient.post('http://localhost:4000/users/update', data);
      }
  findUser(username:string){
    const data={
      username:username
    }
    return this.httpClient.post('http://localhost:4000/users/findOne', data);

  }
  findByEmail(email:string){
    const data={
      email:email
    }
    return this.httpClient.post('http://localhost:4000/users/findByEmail', data);

  }
  changePassword(password:string){
    const data={
      password:password,
      username:sessionStorage.getItem("user")
    }
    return this.httpClient.post('http://localhost:4000/users/changePassword', data);

  }
  changeTime(time:string){
    const data={
      time:time,
      username:sessionStorage.getItem("user")
    }
    return this.httpClient.post('http://localhost:4000/users/changeTime', data);

  }
}
