import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }


  login(username:string, password:string){
    const data={
      username:username,
      password:password,
     
    }
    return this.httpClient.post('http://localhost:4000/users/login', data);
  }

  findByPhone(phone:string){
    const data={
      phone:phone
    }
    return this.httpClient.post('http://localhost:4000/users/findByPhone', data);

  }
  
}
