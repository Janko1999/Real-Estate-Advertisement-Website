import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  findUsers(){
    const data={
      status:"Undetermined"
    }
    return this.httpClient.post('http://localhost:4000/users/findUsers', data);

  }
  findAllUsers(){
    const data={
      status:"Accept"
    }
    return this.httpClient.post('http://localhost:4000/users/findAllUsers', data);

  }
  accept(user:User){
    const data={
      status:"Accept",
      username:user.username
    }
    return this.httpClient.post('http://localhost:4000/users/updateStatus', data);
  }

  reject(user:User){
    const data={
      status:"Reject",
      username:user.username
    }
    return this.httpClient.post('http://localhost:4000/users/updateStatus', data);
  }
  delete(user:User){
    const data={
      
      username:user.username
    }
    return this.httpClient.post('http://localhost:4000/users/deleteUser', data);
  }
  newAgency(name:string, address:string, phoneNumber:string, PIB:string, city:string){
    const data={
      name:name,
      address:address,
      phoneNumbe:phoneNumber,
      city:city,
      PIB:PIB

    }
    return this.httpClient.post('http://localhost:4000/agencies/newAgency', data);
  }
  getAgencies(){
    
    return this.httpClient.get('http://localhost:4000/agencies/getAll');
  }

  insertLocation(city:string, state:string, microlocation:string, street:string ){
    const data={
      city:city,
      state:state,
      microlocation:microlocation,
      street:street
    }
    return this.httpClient.post("http://localhost:4000/location/insertLocation", data);
  }
  getLocations(){
    return this.httpClient.get("http://localhost:4000/location/getLocations");
  }

  insertMicrolocation(microlocation:string){
    const data={
    
      microlocation:microlocation
      
    }
    return this.httpClient.post("http://localhost:4000/location/insertMicrolocation", data);

  }
  insertStreet(street:String){
    const data={
      
      street:street
     
    }
    return this.httpClient.post("http://localhost:4000/location/insertStreet", data);
  }
}
