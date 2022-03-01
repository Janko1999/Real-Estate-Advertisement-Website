import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../models/User';
import { BuyerService } from '../services/buyer.service';
import { Ad } from '../models/Ad';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router, private buyerService:BuyerService) {
    this.storage = sessionStorage;
   }
   emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 
  ngOnInit(): void {
    sessionStorage.removeItem("user");
    this.buyerService.getAds().subscribe((ads:Ad[])=>{
      this.ads=ads;
      this.ads=this.ads.reverse();
      this.ads=this.ads.slice(0,5);
    });
  }
  flag:boolean=false;
  flag2:boolean=true;
  username:string;
  password:string;
  error:string;
  storage:any;
  ads:Ad[]
  click() {
    this.flag=true;
    this.flag2=false;
  }
  
  // When the user clicks on <span> (x), close the modal
  spanClick() {
    this.flag=false;
    this.flag2=true;
  }
  login(){
    this.error="";
      this.loginService.login(this.username, this.password).subscribe((user:User)=>{
        if(user){
          sessionStorage.setItem("user", this.username);
          if(user.typeString=="Admin")
            this.router.navigate(['/admin']);
          
            else
              if(user.typeString=="Kupac")
                this.router.navigate(['/buyer']);
              else 
                this.router.navigate(['/salesman']);
        }
        else{
          this.error="Pogresni kredencijali!";
        }
      })
  }
  
}

